import { getVisibleContacts } from "../../redux/phonebook/phonebook-selectors";
import { addContact } from "../../redux/phonebook/phonebook-operations";
import { Form, Label, Input, Button } from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { nanoid } from "nanoid";

export default function ContactForm() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");

	const contacts = useSelector(getVisibleContacts);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		resetInput();
		if (
			contacts.find(
				(contact) => contact.name.toLowerCase() === name.toLowerCase()
			)
		) {
			toast.error(`${name} is already in contacts.`);
		} else if (contacts.find((contact) => contact.phone === phone)) {
			toast.error(`${phone} is already in contacts.`);
		} else {
			dispatch(addContact({ name, phone }));
		}
	};

	const resetInput = () => {
		setName("");
		setPhone("");
	};

	const nameInputId = nanoid();
	const numberInputId = nanoid();

	return (
		<Form onSubmit={handleSubmit}>
			<Label htmlFor={nameInputId}>
				Name
				<Input
					type="text"
					name="name"
					id={nameInputId}
					value={name}
					onChange={(e) => setName(e.target.value)}
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
					placeholder="Andrei Potapov"
				/>
			</Label>
			<Label htmlFor={numberInputId}>
				Number
				<Input
					type="tel"
					name="number"
					id={numberInputId}
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
					placeholder="111-11-11"
				/>
			</Label>
			<Button type="sumbit">Add contact</Button>
		</Form>
	);
}
