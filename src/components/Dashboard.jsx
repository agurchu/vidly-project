import React from "react";
import SideBar from "./admin/SideBar";
import { Route, useParams } from "react-router-dom";

export default function Dashboard() {
  const {} = useParams();
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
    </div>
  );
}
