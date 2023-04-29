import { useState } from "react";
import Movies from "./components/movies";
import "./App.css";
import NavBar from "./components/navBar";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/products";
import Posts from "./components/posts";
import Admin from "./components/admin";
import NotFound from "./components/notFound";
import ProductDetails from "./components/productDetails";

function App(props) {
  return (
    <>
      <NavBar />

      <main className="container py-4 px-3 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route
            path="/products"
            element={<Products sortBy="newest" {...props} />}
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/posts/:year?/:month?" element={<Posts />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/not-found" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
