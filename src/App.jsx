import Movies from "./components/movies";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home";
import NotFound from "./components/notFound";
import Layouts from "./components/Layouts";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/not-found" />} />
      </Route>
    </Routes>
  );
}

export default App;
