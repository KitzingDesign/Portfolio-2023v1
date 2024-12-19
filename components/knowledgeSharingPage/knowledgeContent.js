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
					The platform was created through a thorough pre-study, including
					benchmarking, literature reviews, and interviews with professionals in
					the industry as a foundation. Subsequently, the initial prototype was
					developed and evaluated with users. Finally, the design or the
					platform was created, which can be viewed below. If you&apos;re
					curious about the process or just how it works, feel free to reach
					out!
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
