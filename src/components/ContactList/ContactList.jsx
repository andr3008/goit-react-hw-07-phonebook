import { useDispatch, useSelector } from "react-redux";
import { getVisibleContacts } from "../../redux/phonebook/phonebook-selectors";
import { deleteContact } from "../../redux/phonebook/phonebook-operations";
import React from "react";
import { Ul, Li, Button, P } from "./ContactList.styled";
import toast from "react-hot-toast";
export default function ContactList() {
	const contacts = useSelector(getVisibleContacts);
	const dispatch = useDispatch();
	const onDelete = ({ id, name, number }) => {
		if (
			contacts.find(
				(contact) => contact.name.toLowerCase() === name.toLowerCase()
			)
		) {
			toast.error(`${name} is already in contacts.`);
		} else if (contacts.find((contact) => contact.number === number)) {
			toast.error(`${number} is already in contacts.`);
		} else {
			dispatch(deleteContact(id));
		}
	};

	return (
		<Ul>
			{contacts.map(({ id, name, number }) => (
				<Li key={id}>
					<P>
						{name}: {number}
					</P>
					<Button type="button" onClick={() => onDelete(id)}>
						Delete
					</Button>
				</Li>
			))}
		</Ul>
	);
}
