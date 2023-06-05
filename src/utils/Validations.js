import * as yup from "yup";

export const contactValidation = yup.object({
  firstName: yup.string().required("First name can't be empty").trim(),
  lastName: yup.string().required("Last name can't be empty").trim(),
  mob: yup
    .string()
    .required("Phone number can't be empty")
    .min(12, "Please enter a valid phone number")
    .max(12, "Please enter a valid phone number"),
});
