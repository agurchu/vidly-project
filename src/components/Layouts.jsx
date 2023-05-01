import React from "react";
import NavBar from "./navBar";
import { Outlet } from "react-router-dom";

export default function Layouts() {
  return (
    <div>
      <NavBar />
      <main className="container py-4 px-3 mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
