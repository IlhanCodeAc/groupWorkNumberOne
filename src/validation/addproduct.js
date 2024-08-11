import * as Yup from "yup";

export const ProductValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters long")
    .required("Title is required"),

  description: Yup.string()
    .min(2)
    .max(150)
    .required("Description is required"),

  price: Yup.number()
    .positive("Price must be a positive number")
    .required("Price is required"),

  images: Yup.array()
    .of(Yup.string().url("Must be a valid URL"))
    .required("At least one image URL is required"),
});
