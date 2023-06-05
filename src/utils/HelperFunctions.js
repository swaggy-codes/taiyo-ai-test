// Here I can initialize helper funcitons that are needed at multiple places in the application...

export const globalHandleChange = (e, formik) => {
  formik.setFieldValue(e.target.name, e.target.value);
};
