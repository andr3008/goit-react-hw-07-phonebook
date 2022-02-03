import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as contactsReducers from "../phonebook/phonebook-operations";

const filter = createReducer("", {
  [contactsReducers.changeFilter]: (_, { payload }) => payload,
});

const items = createReducer([], {
  [contactsReducers.fetchContacts.fulfilled]: (_, { payload }) => payload,
  [contactsReducers.addContact.fulfilled]: (state, { payload }) => [
    payload,
    ...state,
  ],

  [contactsReducers.deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
});

export default combineReducers({ items, filter });
