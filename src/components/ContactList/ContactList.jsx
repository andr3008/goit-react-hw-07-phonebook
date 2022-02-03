import { getVisibleContacts } from "../../redux/phonebook/phonebook-selectors";
import { deleteContact } from "../../redux/phonebook/phonebook-operations";
import { Ul, Li, Button, P } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";

export default function ContactList() {
	const contacts = useSelector(getVisibleContacts);
	const dispatch = useDispatch();
	const onDelete = (id) => dispatch(deleteContact(id));

	return (
		<Ul>
			{contacts.map(({ id, name, phone }) => (
				<Li key={id}>
					<P>
						{name}: {phone}
					</P>
					<Button type="button" onClick={() => onDelete(id)}>
						Delete
					</Button>
				</Li>
			))}
		</Ul>
	);
}
