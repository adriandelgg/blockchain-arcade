interface Props {
	setCardColor: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectCardColor = ({ setCardColor }: Props) => {
	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		setCardColor(e.currentTarget.value);
	}

	return (
		<div>
			<h3>Choose a Card Color:</h3>
			<button value="blue" onClick={handleClick}>
				Blue
			</button>
			<button value="green" onClick={handleClick}>
				Green
			</button>
			<button value="purple" onClick={handleClick}>
				Purple
			</button>
			<button value="red" onClick={handleClick}>
				Red
			</button>
			<button value="yellow" onClick={handleClick}>
				Yellow
			</button>
		</div>
	);
};
