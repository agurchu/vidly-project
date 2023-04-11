import React, { useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ]);

  return (
    <div>
      <h1>Produts</h1>
      <ul className="navbar-nav">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            {product.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Products;
