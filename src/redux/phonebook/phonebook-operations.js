import axios from "axios";
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./phonebook-actions";
axios.defaults.baseURL = "https://61f8f8ea783c1d0017c44866.mockapi.io";
export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((error) => dispatch(fetchContactError(error)));
};
export const addContact =
  ({ name, number }) =>
  (dispatch) => {
    const contact = { name, number };
    dispatch(addContactRequest());
    axios
      .post("/contacts", contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch((error) => dispatch(addContactError(error)));
  };
export const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error)));
};
