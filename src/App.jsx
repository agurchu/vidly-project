import { useState } from "react";
import Movies from "./components/movies";
import "./App.css";
import NavBar from "./components/navBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="container py-4 px-3 mx-auto">
        <Movies />
      </main>
    </>
  );
}

export default App;
