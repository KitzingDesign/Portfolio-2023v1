import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

const KandRender = (props) => {
	return (
		<Zoom>
			<div
				style={{
					border: "white solid 2rem",
					backgroundColor: "white",
					width: "40vw",
					boxShadow:
						"  rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
				}}
			>
				<Image
					width="100%"
					height="66%"
					layout="responsive"
					objectFit="contain"
					src={`/Kandidat/solutions/${props.url}.webp`}
					alt={props.alt}
					style={{
						border: "white solid 2rem",
						boxShadow:
							"  rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
					}}
				/>
			</div>
		</Zoom>
	);
};

export default KandRender;
