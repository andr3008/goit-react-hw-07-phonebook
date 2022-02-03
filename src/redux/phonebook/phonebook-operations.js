import * as contactAPI from "../../services/phonebook-api";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const changeFilter = createAction("contacts/changeFilter");

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (payload, { rejectWithValue }) => {
    try {
      const contacts = await contactAPI.addContact(payload);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      const contacts = await contactAPI.deleteContact(contactId);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
