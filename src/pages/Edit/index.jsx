import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  const [product, setProduct] = useState(null);

   

 

  return (
    <div>
      <h1>Edit Product</h1>
      <div>
        <p>ID: {product.id}</p>
        <p>Name: {product.name}</p>
        <p>Description: {product.description}</p>
       
      </div>
    </div>
  );
};

export default Edit;
