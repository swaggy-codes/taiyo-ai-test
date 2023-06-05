import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editContact } from "../Redux/action";
import { useFormik } from "formik";
import { globalHandleChange } from "../utils/HelperFunctions";
import { contactValidation } from "../utils/Validations";

function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allContacts = useSelector((store) => store.contacts);
  // console.log(allContacts, "editContacteditContacteditContact");

  const editFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mob: "",
      status: "active",
    },
    validationSchema: contactValidation,
    onSubmit: (values) => {
      console.log(values, "formik values");
      const { firstName, lastName, mob, status } = values;
      dispatch(editContact({ id, firstName, lastName, mob, status }));
    },
  });

  // useEffect call to set the data of the contact as per the id...
  useEffect(() => {
    allContacts.filter((el) => {
      if (el?.id == id) {
        console.log(el, "this is the element");
        return editFormik.setValues({
          firstName: el?.firstName,
          lastName: el?.lastName,
          mob: el?.mob,
          status: el?.status,
        });
      }
      return 1;
    });
  }, [id]);

  console.log(editFormik, "heloooooooooooooooooooooo");

  return (
    <div className='w-1/2 mx-auto my-4 pt-16'>
      <h2 className='text-2xl font-bold mb-4'>Edit Contact</h2>
      <div className='mb-4'>
        <label className='block font-bold mb-2' htmlFor='first-name'>
          First Name
        </label>
        <input
          className='w-full border border-gray-400 p-2 rounded-md'
          id='first-name'
          type='text'
          name='firstName'
          value={editFormik.values.firstName}
          onChange={(e) => {
            globalHandleChange(e, editFormik);
          }}
        />
        {Boolean(editFormik.touched.firstName && editFormik.errors.firstName) && (
          <p className='text-red-500 mt-2'>{editFormik.errors.firstName}</p>
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
          value={editFormik.values.lastName}
          onChange={(e) => {
            globalHandleChange(e, editFormik);
          }}
        />
        {Boolean(editFormik.touched.lastName && editFormik.errors.lastName) && (
          <p className='text-red-500 mt-2'>{editFormik.errors.lastName}</p>
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
          value={editFormik.values.mob}
          onChange={(e) => {
            globalHandleChange(e, editFormik);
          }}
        />
        {Boolean(editFormik.touched.mob && editFormik.errors.mob) && (
          <p className='text-red-500 mt-2'>{editFormik.errors.mob}</p>
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
          value={editFormik.values.status}
          onChange={(e) => {
            globalHandleChange(e, editFormik);
          }}>
          <option value={"active"}>Active</option>
          <option value={"inactive"}>Inactive</option>
        </select>
      </div>
      <div className='flex'>
        <div className='flex-1'>
          <button
            type='button'
            className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => {
              navigate("/");
            }}>
            Back
          </button>
        </div>
        <div className='flex-1'>
          <button
            type='button'
            className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => {
              editFormik.handleSubmit();
            }}>
            Save Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditContact;
