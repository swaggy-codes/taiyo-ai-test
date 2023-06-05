import { useDispatch } from "react-redux";
import { addContact } from "../Redux/action";
import { useFormik } from "formik";
import { globalHandleChange } from "../utils/HelperFunctions";
import { contactValidation } from "../utils/Validations";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   here I've used formik library...
  const contactFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mob: "",
      status: "active",
    },
    validationSchema: contactValidation,
    onSubmit: (values) => {
      console.log(values, "formik values");
      dispatch(addContact(values));
      navigate("/");
      contactFormik.resetForm();
    },
  });

  //   console.log(contactFormik, "formikvalues");

  return (
    <div className='w-1/2 mx-auto my-4 pt-16'>
      <h2 className='text-2xl font-bold mb-4'>Create Contact</h2>
      <div className='mb-4'>
        <label className='block font-bold mb-2' htmlFor='first-name'>
          First Name
        </label>
        <input
          className='w-full border border-gray-400 p-2 rounded-md'
          id='first-name'
          type='text'
          name='firstName'
          //   value={form.first_name}
          value={contactFormik.values.firstName}
          onChange={(e) => globalHandleChange(e, contactFormik)}
        />
        {Boolean(contactFormik.touched.firstName && contactFormik.errors.firstName) && (
          <p className='text-red-500 mt-2'>{contactFormik.errors.firstName}</p>
        )}
      </div>
      <div className='mb-4'>
        <label className='block font-bold mb-2' htmlFor='last-name'>
          Last Name
        </label>
        <input
          className='w-full border border-gray-400 p-2 rounded-md'
          id='last-name'
          type='text'
          name='lastName'
          //   value={form.last_name}
          value={contactFormik.values.lastName}
          onChange={(e) => globalHandleChange(e, contactFormik)}
        />
        {Boolean(contactFormik.touched.lastName && contactFormik.errors.lastName) && (
          <p className='text-red-500 mt-2'>{contactFormik.errors.lastName}</p>
        )}
      </div>
      <div className='mb-4'>
        <label className='block font-bold mb-2' htmlFor='last-name'>
          Mobile Number
        </label>
        <input
          className='w-full border border-gray-400 p-2 rounded-md'
          id='last-name'
          type='number'
          name='mob'
          min='10'
          max='10'
          //   value={form.mob}
          value={contactFormik.values.mob}
          onChange={(e) => globalHandleChange(e, contactFormik)}
        />
        {Boolean(contactFormik.touched.mob && contactFormik.errors.mob) && (
          <p className='text-red-500 mt-2'>{contactFormik.errors.mob}</p>
        )}
      </div>
      <div className='mb-4'>
        <label className='block font-bold mb-2' htmlFor='status'>
          Status
        </label>
        <select
          className='w-full border border-gray-400 p-2 rounded-md'
          id='status'
          name='status'
          //   value={form.status}
          value={contactFormik.values.status}
          onChange={(e) => globalHandleChange(e, contactFormik)}>
          <option value={"active"}>Active</option>
          <option value={"inactive"}>Inactive</option>
        </select>
      </div>
      <button
        type='button'
        className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
        //   onClick={handleSave}
        onClick={() => contactFormik.handleSubmit()}>
        Save Contact
      </button>
    </div>
  );
}

export default ContactForm;
