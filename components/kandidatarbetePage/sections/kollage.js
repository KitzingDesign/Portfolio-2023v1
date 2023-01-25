import styles from "./kollage.module.css";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
import styled from "@emotion/styled";

//emotion styles
const ImgContainer = styled.div`
	width: 100%;
`;
const Hide = styled(Zoom)`
	@media (max-width: 75em) {
		display: none;
	}
`;

const Kollage = () => {
	return (
		<div className={styles.container}>
			<Zoom>
				<img
					src={"/Kandidat/solutions/kollage/bild-1.jpg"}
					style={{ width: "100%" }}
					alt="prototyping"
				></img>{" "}
			</Zoom>
			<div className={styles.hide}>
				<Zoom>
					<img
						src={"/Kandidat/solutions/kollage/bild-2.jpg"}
						style={{ width: "100%" }}
						alt="prototyping"
					></img>{" "}
				</Zoom>
			</div>
			<Zoom>
				<img
					src={"/Kandidat/solutions/kollage/bild-3.jpg"}
					style={{ width: "100%" }}
					alt="prototyping"
				></img>{" "}
			</Zoom>
			<Zoom>
				<img
					src={"/Kandidat/solutions/kollage/bild-4.jpg"}
					style={{ width: "100%" }}
					alt="Surounding"
				></img>{" "}
			</Zoom>
			<Zoom>
				<img
					src={"/Kandidat/solutions/kollage/bild-5.jpg"}
					style={{ width: "100%" }}
					alt="Surounding"
				></img>{" "}
			</Zoom>
			<Zoom>
				<img
					src={"/Kandidat/solutions/kollage/bild-6.jpg"}
					style={{ width: "100%" }}
					alt="Surounding"
				></img>{" "}
			</Zoom>
			<Zoom>
				<img
					src={"/Kandidat/solutions/kollage/bild-7.jpg"}
					style={{ width: "100%" }}
					alt="Concept"
				></img>{" "}
			</Zoom>
			<Zoom>
				<img
					src={"/Kandidat/solutions/kollage/bild-8.jpg"}
					style={{ width: "100%" }}
					alt="Concept"
				></img>{" "}
			</Zoom>
			<Zoom>
				<img
					src={"/Kandidat/solutions/kollage/bild-9.jpg"}
					style={{ width: "100%" }}
					alt="Concept"
				></img>{" "}
			</Zoom>
		</div>
	);
};

export default Kollage;
