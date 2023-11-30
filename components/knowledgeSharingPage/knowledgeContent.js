import styles from "./knowledgeContent.module.css";
import Image from "next/image";

import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";

const KnowledgeContent = () => {
	const [domLoaded, setDomLoaded] = useState(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);
	return (
		<div className={styles.container}>
			<div>
				<h2 data-aos="fade-up">Knowledge Sharing Platform</h2>
				<p data-aos="fade-up">
					Platformen skapades genom en gedigen förstudie med både bench marking,
					litteraturstudier och intervjuer med personer inom näringslivet som
					grund. Därefter skapades den första prototypen som evaluerades med
					användare. Tillslut skapades sidan som kan ses nedan, ifall ni är
					nyfikna på hur den fungerar är det bara att höra av sig!
				</p>
			</div>
			<div className={styles.swiperContainer} data-aos="fade-up">
				{domLoaded && (
					<Swiper
						modules={[Pagination, Navigation]}
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
								src="/knowledge/KnowledgeFirstView.png"
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
				)}
			</div>
		</div>
	);
};
export default KnowledgeContent;
