import styles from "./hertzNew.module.css";
import Image from "next/image";

import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination]);

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const HertzNew = () => {
	return (
		<div className={styles.container}>
			<div>
				<h2 data-aos="fade-up">Nya Hemsidan</h2>
				<p data-aos="fade-up">
					Den gamla hemsidan utvärderades med 7 olika intervjuobjekter.
					Materialet från intervjuerna analyserades och stod till grund för
					redesignen som kan ses nedan. En av de främsta förändringar är att
					minska informationsöverflödet så att hen enkelt kan hitta vilken väg
					hen ska gå. En tydlig processbar lades in för att användaren enkelt
					skulle kunna se var i bokningsprocessen hen befann sig, samt enkelt
					kunna ändra på tidigare parameterar.
				</p>
			</div>
			<div className={styles.swiperContainer} data-aos="fade-up">
				<Swiper
					id="swiper-color"
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					className={styles.imgContainer}
				>
					<SwiperSlide>
						<Image
							width="100%"
							height="60%"
							layout="responsive"
							objectFit="contain"
							src="/Car-rental/HertzNew-1.png"
							alt="HomePage New"
						/>
						<p className={styles.descriptionImg}>Startsida</p>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							width="100%"
							height="60%"
							layout="responsive"
							objectFit="contain"
							src="/Car-rental/HertzNew-2.png"
							alt="RentalPage New"
						/>
						<p className={styles.descriptionImg}>
							Uppgifter gällande utrhyrningen
						</p>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							width="100%"
							height="60%"
							layout="responsive"
							objectFit="contain"
							src="/Car-rental/HertzNew-3.png"
							alt="Choose Car Page New"
						/>
						<p className={styles.descriptionImg}>Val av Bil</p>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							width="100%"
							height="60%"
							layout="responsive"
							objectFit="contain"
							src="/Car-rental/HertzNew-4.png"
							alt="Payment Page New"
						/>
						<p className={styles.descriptionImg}>Betalningsinfromation</p>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};
export default HertzNew;
