import { createReducer, combineReducers } from "@reduxjs/toolkit";
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
  changeFilter,
} from "./phonebook-actions";
import toast from "react-hot-toast";

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    const { name, number } = payload;
    if (
      state.find((contact) => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      toast.error(`${name} is already in contacts.`);
    } else if (state.find((contact) => contact.number === number)) {
      toast.error(`${number} is already in contacts.`);
    } else {
      return [...state, payload];
    }
  },

  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});
export default combineReducers({ items, filter, loading });
