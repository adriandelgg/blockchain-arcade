interface Props {
	setCardColor: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectCardColor = ({ setCardColor }: Props) => {
	return (
		<form>
			<label htmlFor="card-colors">Choose a Card Color:</label>
			<select name="cardColor" id="card-colors">
				<option value="blue">Blue</option>
				<option value="saab">Red</option>
				<option value="mercedes">Green</option>
				<option value="audi">Purple</option>
				<option value="audi">Yellow</option>
			</select>
		</form>
	);
};
