import React from "react";
import { Navigate, useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const handleSave = () => {
    // <Navigate to={"/products"}/>
  };
  return (
    <div>
      <h1>Product Details - {id}</h1>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
