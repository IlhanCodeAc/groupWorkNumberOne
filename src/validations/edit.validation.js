import * as Yup from "yup";

export const productValidationSchema = Yup.object().shape({
  title: Yup.string().min(3).required(),
  price: Yup.number().min(5).required(),
  coverPhoto: Yup.string().url().required(),
  description: Yup.string().required()
});
