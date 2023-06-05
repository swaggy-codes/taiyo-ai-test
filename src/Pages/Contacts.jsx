import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Popup from "../Components/Popup";
import { removeContact } from "../Redux/action";
import ProfilePicDemo from "../Assets/Images/person.png";

const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [singleContact, setSingleContact] = useState({});
  let data = undefined;
  const allContactsArr = useSelector((store) => store.contacts);
  const dispatch = useDispatch();

  const togglePopup = (contact) => {
    setSingleContact(contact);
    setIsOpen(!isOpen);
  };

  useEffect(() => {}, [dispatch, allContactsArr.length]);

  return (
    <div className='justify-center pt-16 text-gray-50 p-4 w-full '>
      <div className='m-4'>
        <button className='rounded-lg bg-black text-whit p-2 text-2xl'>
          <Link to='/contact-form'>Create Contact</Link>
        </button>
      </div>
      {allContactsArr.length == 0 && (
        <div className=' m-auto w-fit p-4 align-middle text-gray-500 justify-center'>
          <h3>Oops...</h3>
          <br />
          <h3>No Contacts Found</h3>
        </div>
      )}
      <div id='contact_list' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {allContactsArr?.length > 0
          ? allContactsArr.map((el, i) => {
              return (
                <div key={`contact-${i}`} className='bg-gray-300 rounded-lg shadow-md m-4 p-4 text-white'>
                  <div onClick={() => togglePopup(el)} className='w-3/4 m-auto  '>
                    <img
                      className='w-full rounded-full'
                      src=''
                      alt=''
                      onError={(event) => {
                        event.target.src = ProfilePicDemo;
                        event.onerror = null;
                      }}
                    />
                    <div className='p-4'>{isOpen && <Popup close={() => togglePopup(data)} el={singleContact} />}</div>{" "}
                    <div className='text-left'>
                      <p className='text-black font-semibold'>First Name : {el.firstName}</p>
                      <p className='text-black font-semibold'>Last Name : {el.lastName}</p>
                      <p className='text-black font-semibold'>Mobile : {el.mob}</p>
                      <p className='text-black font-semibold'>
                        Status : {el.status == "active" ? "Active" : "Inactive"}
                      </p>
                    </div>
                  </div>

                  <div className='flex justify-between my-2'>
                    <Link to={`edit-contact/${el.id}`}>
                      <button className='rounded p-2 bg-white text-black'>Edit</button>
                    </Link>

                    <button
                      onClick={() => dispatch(removeContact(el.id))}
                      className='rounded p-2 bg-red-600 text-white'>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Contacts;
