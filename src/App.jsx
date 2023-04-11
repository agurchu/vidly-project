import { useState } from "react";
import Movies from "./components/movies";
import "./App.css";
import NavBar from "./components/navBar";
import { Route, Routes, Redirect } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/products";
import Posts from "./components/posts";
import Admin from "./components/admin";
import NotFound from "./components/notFound";

function App() {
  return (
    <>
      <NavBar />

      <main className="container py-4 px-3 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/posts/:year?/:month?" element={<Posts />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/not-found" element={<NotFound />} />
          <Redirect to="/not-found" />
        </Routes>
      </main>
    </>
  );
}

export default App;
