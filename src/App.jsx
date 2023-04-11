import { useState } from "react";
import Movies from "./components/movies";
import "./App.css";
import NavBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/products";
import Posts from "./components/posts";
import Admin from "./components/admin";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
      {/* <main className="container py-4 px-3 mx-auto">
        <Movies />
      </main> */}
    </>
  );
}

export default App;
