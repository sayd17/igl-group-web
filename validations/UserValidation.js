import * as yup from "yup";

const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .max(40, "Must be at most 40 characters"),
  phone: yup
    .string()
    .matches(/^(01[3-9]\d{8})$/, "Must be a valid Bangladeshi phone number")
    .required("Phone number is required"),
});

export default userSchema;
