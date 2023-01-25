import styles from "./hertzOld.module.css";
import Image from "next/image";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";

SwiperCore.use([Pagination, Navigation]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Container = styled.div`
	width: 70vw;
	margin: 0 auto;
	margin-top: 9.8rem;
	& > p {
		margin-top: 2.4rem;
	}
	@media (max-width: 25em) {
		width: 80vw;
	}
`;
const SwiperContainer = styled.div`
	width: 100%;
	margin-top: 2.4rem;
	}
`;
const DescriptionImg = styled.p`
	margin-top: 0vh;
`;

const HertzOld = () => {
	return (
		<Container>
			<div>
				<h2 data-aos="fade-up">Befintlig Hemsida</h2>
				<p data-aos="fade-up">
					En teoretisk utvärdering av den befintliga hemsidan skapades för att
					konkretisera eventuella problem med hemsidan. Det främsta som framkom
					var att hemsidan i vissa fall var svår att förstå, den bestod av
					mycket information som inte ledde användaren framåt i processen, utan
					snarare gjorde användaren förvirrad. Utifrån den problembilden som
					skapats gjordes en prototyp av den befintliga hemsidan i adobe XD för
					att kunna få en jämförbar utvärdering med framtida prototyp för en
					redesign.
				</p>
			</div>
			<SwiperContainer data-aos="fade-up">
				<Swiper
					id="swiper-color"
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					className={styles.swiperButtonNext}
				>
					<SwiperSlide>
						<div>
							<Image
								width="100%"
								height="60%"
								layout="responsive"
								objectFit="contain"
								src="/Car-rental/HertzOld-1.png"
								alt="Homepage Old Site"
							/>
							<DescriptionImg>Startsida</DescriptionImg>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							width="100%"
							height="60%"
							layout="responsive"
							objectFit="contain"
							src="/Car-rental/HertzOld-2.png"
							alt="Rentalpage Old Site"
						/>
						<DescriptionImg>Uppgifter gällande utrhyrningen</DescriptionImg>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							width="100%"
							height="60%"
							layout="responsive"
							objectFit="contain"
							src="/Car-rental/HertzOld-3.png"
							alt="Choose Car Page Old Site"
						/>
						<DescriptionImg>Val av Bil</DescriptionImg>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							width="100%"
							height="60%"
							layout="responsive"
							objectFit="contain"
							src="/Car-rental/HertzOld-4.png"
							alt="Payment Page Old Site"
						/>
						<DescriptionImg>Betalningsinfromation</DescriptionImg>
					</SwiperSlide>
				</Swiper>
			</SwiperContainer>
		</Container>
	);
};
export default HertzOld;
