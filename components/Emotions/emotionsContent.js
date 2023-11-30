import styles from "./emotionsContent.module.css";
import Image from "next/image";

import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination]);

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const EmotionsContent = () => {
	return (
		<div className={styles.container}>
			<div>
				<h2 data-aos="fade-up">Calmifly the App</h2>
				<p data-aos="fade-up"></p>
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
							src="/emotionsImg/firstview.png"
							alt="First view of the app"
						/>
						<p className={styles.descriptionImg}></p>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							width="100%"
							height="60%"
							layout="responsive"
							objectFit="contain"
							src="/emotionsImg/secondview.png"
							alt="Second view of the app"
						/>
						<p className={styles.descriptionImg}></p>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							width="100%"
							height="60%"
							layout="responsive"
							objectFit="contain"
							src="/emotionsImg/thirdview.png"
							alt="Third view of the app"
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
export default EmotionsContent;
