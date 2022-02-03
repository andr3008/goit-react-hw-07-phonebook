import axios from "axios";

axios.defaults.baseURL = "https://61f8f8ea783c1d0017c44866.mockapi.io";

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}
