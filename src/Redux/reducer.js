// This is the reducer file...
import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from "./actionTypes";
import toast from "react-hot-toast";

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      {
        let flag = 0;
        if (action.payload.firstName == "" || action.payload.lastName == "" || action.payload.mob == "") {
          toast.warning("ohh You Missed Required Input , Please fill", { id: "005" });
          flag = 1;
        } else {
          state.contacts.forEach((el) => {
            if (el.firstName == action.payload.firstName && el.lastName == action.payload.lastName) {
              toast.warning("Name Already Exist In Contact", { id: "006" });
              flag = 1;
            }
          });
        }

        if (!flag) {
          let updatedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
          updatedContacts.push({ id: state.contacts.length + 1, ...action.payload });
          localStorage.setItem("contacts", JSON.stringify(updatedContacts));
          toast.success("Contact Saved Successfully!!!", { id: "004" });
          return {
            ...state,
            contacts: [...updatedContacts],
          };
        }
      }
      break;

    case REMOVE_CONTACT: {
      let Contacts = JSON.parse(localStorage.getItem("contacts"));
      let updatedContacts = Contacts.filter((el) => el.id != action.payload.id);
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      toast.success("Contact removed successfully", { id: "003" });
      // console.log(localStorage.getItem("contacts"))
      return {
        ...state,
        contacts: [...updatedContacts],
      };
    }

    case EDIT_CONTACT: {
      if (action.payload.firstName == "" || action.payload.lastName == "" || action.payload.mob == "") {
        toast.error("Input Fields Can Not Be Leave Empty", { id: "001" });
        // flag=1
        return state;
      } else {
        let flag = 0;
        let Contacts = JSON.parse(localStorage.getItem("contacts"));
        if (flag) {
          return state;
        } else {
          let updatedContacts = Contacts.map((el) => {
            if (el.id == action.payload.id) {
              return (el = { ...action.payload });
            } else {
              return el;
            }
          });
          localStorage.setItem("contacts", JSON.stringify(updatedContacts));
          toast.success("Contact has been Updated", { id: "002" });
          return {
            ...state,
            contacts: state.contacts.map((el) => {
              if (el.id == action.payload.id) {
                return (el = { ...action.payload });
              } else {
                return el;
              }
            }),
          };
        }
      }
    }
    default:
      return state;
  }
}
