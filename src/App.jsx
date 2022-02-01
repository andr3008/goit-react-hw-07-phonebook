import { getVisibleContacts } from "./redux/phonebook/phonebook-selectors";
import { useSelector, useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import { Wrapper, Title, TitleContacts, P } from "./App.styled";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { fetchContacts } from "./redux/phonebook/phonebook-operations";
import { useEffect } from "react";
export default function App() {
	const contacts = useSelector(getVisibleContacts);

	const dispatch = useDispatch();
	useEffect(() => dispatch(fetchContacts()), [dispatch]);

	return (
		<Wrapper>
			<Toaster />
			<Title>Phonebook</Title>
			<ContactForm />
			<TitleContacts>Contacts</TitleContacts>
			<Filter />
			{contacts.length > 0 ? (
				<ContactList contacts={contacts} />
			) : (
				<P>Your phonebook is empty.</P>
			)}
		</Wrapper>
	);
}
