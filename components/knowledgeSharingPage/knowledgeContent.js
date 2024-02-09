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
								src="/knowledge/KnowledgeFirstView.webp"
								alt="Help Others View"
							/>

							<p className={styles.descriptionImg}>Help Others page</p>
						</SwiperSlide>

						<SwiperSlide>
							<Image
								width="100%"
								height="60%"
								layout="responsive"
								objectFit="contain"
								src="/knowledge/FirstFindHelp.webp"
								alt="First find help page"
							/>
							<p className={styles.descriptionImg}>First find help page</p>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								width="100%"
								height="60%"
								layout="responsive"
								objectFit="contain"
								src="/knowledge/SecondFindHelp.webp"
								alt="View of second find help page"
							/>
							<p className={styles.descriptionImg}>Second find help page</p>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								width="100%"
								height="60%"
								layout="responsive"
								objectFit="contain"
								src="/knowledge/FirstFindPeople.webp"
								alt="View of first find people page"
							/>
							<p className={styles.descriptionImg}>First find people page</p>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								width="100%"
								height="60%"
								layout="responsive"
								objectFit="contain"
								src="/knowledge/SecondFindPeople.webp"
								alt="View of second find people page"
							/>
							<p className={styles.descriptionImg}>Second find people page</p>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								width="100%"
								height="60%"
								layout="responsive"
								objectFit="contain"
								src="/knowledge/Archives.webp"
								alt="View of archives page"
							/>
							<p className={styles.descriptionImg}>Archives page</p>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								width="100%"
								height="60%"
								layout="responsive"
								objectFit="contain"
								src="/knowledge/ProfilePage.webp"
								alt="View of profile page"
							/>
							<p className={styles.descriptionImg}>Profile Page</p>
						</SwiperSlide>
					</Swiper>
				)}
			</div>
		</div>
	);
};
export default KnowledgeContent;
