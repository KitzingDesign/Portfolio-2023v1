import { Fragment } from "react";

const KandText = (props) => {
	return (
		<Fragment>
			<h3>{props.titel}</h3>
			<p>{props.text}</p>
		</Fragment>
	);
};
export default KandText;
