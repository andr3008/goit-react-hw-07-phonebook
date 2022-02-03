import { changeFilter } from "../../redux/phonebook/phonebook-operations";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";
import { Label, Input } from "./Filter.styled";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
	const dispatch = useDispatch();
	const filter = useSelector(getFilter);
	const onChange = (value) => dispatch(changeFilter(value));

	const handleFilterChange = (e) => {
		const { value } = e.target;
		onChange(value);
	};

	const filterInputId = nanoid();

	return (
		<Label htmlFor={filterInputId}>
			<Input
				type="text"
				name="name"
				value={filter}
				id={filterInputId}
				onChange={handleFilterChange}
				placeholder="Find contacts by name"
			/>
		</Label>
	);
}
