import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Joi, { options } from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovies } from "../services/fakeMovieService";
import Input from "./common/Input";
import FormProvider, { FormContext } from "../FormContext";
import Select from "./common/Select";

export default function MovieForm() {
  const { id } = useParams();
  const [genres, setGenres] = useState([]);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    title: "",
    genreId: "",
    numberInStock: "",
    dailyRentalRate: "",
  });
  const navigate = useNavigate();
  // console.log(data);

  const schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("GenreId"),
    numberInStock: Joi.string()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.string()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };

  useEffect(() => {
    const genres = getGenres();
    setGenres(genres);

    const movieId = id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return navigate("/not-found");
    setData(mapToViewModel(movie));
  }, [id, navigate]);

  const mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };

  const doSubmit = () => {
    // call server
    saveMovies(data);
    console.log("submitted");
  };
  return (
    <FormProvider schema={schema} onSubmit={doSubmit}>
      <div>
        <h1>MovieForm: </h1>
        <FormContext.Consumer>
          {({ data, errors, handleChange, handleSubmit, validate }) => (
            <form onSubmit={handleSubmit}>
              <Input
                name="title"
                label="Title"
                onChange={handleChange}
                value={data.title}
                type="text"
                error={errors.title}
              />
              <Select
                name={genres}
                value={data.genres}
                label="Genre"
                options={genres}
                onChange={handleChange}
                error={errors.genres}
              />
              <Input
                name="genreId"
                label="GenreId"
                onChange={handleChange}
                value={data.genreId}
                type="text"
                error={errors.genreId}
              />
              <Input
                name="numberInStock"
                label="NumberInStock"
                onChange={handleChange}
                value={data.numberInStock}
                type="text"
                error={errors.numberInStock}
              />
              <Input
                name="dailyRentalRate"
                label="Rate"
                onChange={handleChange}
                value={data.dailyRentalRate}
                type="number"
                error={errors.dailyRentalRate}
              />
              <button
                disabled={validate()}
                className="btn btn-primary"
                onClick={() => navigate("/movies")}
              >
                Save
              </button>
            </form>
          )}
        </FormContext.Consumer>
      </div>
    </FormProvider>
  );
}
