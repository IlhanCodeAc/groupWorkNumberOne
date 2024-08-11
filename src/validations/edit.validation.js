import * as Yup from "yup";

export const mealValidationSchema = Yup.object().shape({
  title: Yup.string().min(3).required(),
  price: Yup.number().min(5).required(),
  coverPhoto: Yup.string().url().required(),
  description: Yup.string()
    .matches(/^[A-Za-z\s.,!?-]*$/, "description should be only letters")
    .required()
});
