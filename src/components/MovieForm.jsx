import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MovieForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>MovieForm: {id}</h1>
      <button className="btn btn-primary" onClick={() => navigate("/movies")}>
        Save
      </button>
    </div>
  );
}
