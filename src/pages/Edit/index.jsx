import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Edit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const products = useSelector((state) => state.products.products);

  useEffect(() => {

    const selectedProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(selectedProduct);
  }, [id, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Product</h1>
      <div>
        <p>ID: {product.id}</p>
        <p>Name: {product.title}</p>
        <p>Description: {product.description}</p>

      </div>
    </div>
  );
};

export default Edit;
