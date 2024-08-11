import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Button, FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import { productValidationSchema } from "../../validations/edit.validation";
import { Select } from "antd";

const Edit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    const selectedProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(selectedProduct);
  }, [id, products]);

  

  const formik = useFormik({
    initialValues: {
      title: product ? product.title : "",
      description: product ? product.description : "",
      price: product ? product.price : "",
      image: product ? product.image : "",
    },
    validationSchema: productValidationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const updatedProduct = {
        ...values,
        id: product.id,
      };
      dispatch(updatedProduct(updatedProduct)); 
    },
  });


  if (!product) {
    return <div>Loading...</div>;
  }
  



  return (
    <div>
      <h1 style={{ marginTop: "20px", marginLeft: "20px" }}>Edit Product</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
          padding: "10px 60px",
          height: "100vh",
        }}
      >
        <TextField
          sx={{ width: "350px" }}
          id="title"
          label="Title"
          variant="outlined"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          sx={{ width: "350px" }}
          id="price"
          label="Price"
          variant="outlined"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
        <TextField
          sx={{ width: "350px" }}
          id="description"
          label="Description"
          variant="outlined"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
    <Box sx={{ minWidth: 350 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Clothes</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Clothes"
          onChange={handleChange}
        >
    <MenuItem value={10}>Clothes</MenuItem>
    <MenuItem value={20}>Electronics</MenuItem>
    <MenuItem value={30}>Furniture</MenuItem>
    <MenuItem value={30}>Shoes</MenuItem>
    <MenuItem value={30}>Others</MenuItem>
        </Select>
      </FormControl>
    </Box>
        <TextField
          sx={{ width: "350px" }}
          id="image"
          label="Image URL"
          variant="outlined"
          value={formik.values.image}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.image && Boolean(formik.errors.image)}
          helperText={formik.touched.image && formik.errors.image}
        />
        <Button
          variant="contained"
          color="success"
          onClick={formik.handleSubmit}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default Edit;
