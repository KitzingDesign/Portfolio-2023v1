import { Fragment } from "react";
import styles from "./digiHeader.module.css";
import { useState, useEffect } from "react";

import {
	HeartIcon,
	ChatIcon,
	PaperAirplaneIcon,
	BookmarkIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

SwiperCore.use([Pagination, Navigation]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwipeArrow from "../UI/swipe-arrow";

//emotion styles
const UpperContainer = styled.div`
	position: relative;
`;

const KryImg = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
`;
const Phone = styled.div`
	transform: translate(-50%, -50%);
	position: absolute;
	z-index: 2;
	width: 25vw;
	overflow: hidden;
	pointer-events: none;
`;
const Swipes = styled.div`
	transform: translate(-50%, -50%);
	position: absolute;
	z-index: 1;
	border-radius: 2.6vw;
	height: 42.1vw;
	width: 22vw;
	overflow: hidden;
	cursor: pointer;
`;
const Swipe = styled.div`
	position: absolute;
	z-index: 1;
	border-radius: 10%;
	height: 42vw;
	width: 22vw;
`;
const FirstSlide = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;
`;
//White side of Phone
const WhiteSide = styled.div`
	width: 50%;
	background-color: white;
`;
const OrangeCicle = styled.div`
	transform: translate(0%, 100%);
	float: right;
	width: 30%;
	padding-top: 60%; /* 1:1 Aspect Ratio */
	background-color: #e38547;
	border-bottom-left-radius: 200px;
	border-top-left-radius: 200px;
`;
const LeftArrow = styled.div`
	position: absolute;
	left: 22%;
	top: 50%;
	transform: scaleX(-1);
	width: 30%;

	fill: #e38547;
`;

//Orange side of phone
const OrangeSide = styled.div`
	width: 50%;
	background-color: #e38547;
`;
const WhiteCicle = styled.div`
	transform: translate(0%, 100%);
	width: 30%;
	padding-top: 60%;
	background-color: white;
	border-bottom-right-radius: 200px;
	border-top-right-radius: 200px;
`;
const RightArrow = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;

	width: 30%;
	fill: white;
`;
////////////////////////////////////
//Second Slide
const SecondSlide = styled.div`
	width: 100%;
	height: 100%;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const ProfileInfo = styled.div`
	margin-left: 2vw;
	display: flex;
	align-items: center;
	height: 8%;
	width: 100%;
	gap: 0.5vw;
	& > p {
		line-height: 1.1;
		font-size: 1rem;
	}
	@media (max-width: 32em) {
		& > p {
			line-height: 1.1;
			font-size: 5px;
		}
	}
`;
const ProfileImg = styled.div`
	height: 4rem;
	width: 4rem;
	padding-bottom: 2.4rem;
	@media (max-width: 32em) {
		height: 12px;
		width: 12px;
		padding-bottom: 15px;
	}
`;
const SwiperImg = styled.div`
	height: 35%;
	width: 100%;
	overflow: hidden;
	position: relative;
`;
const ImgContainer = styled.div`
	position: absolute;

	width: 100%;
`;
const Iconer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 90%;
	margin-top: 0.8rem;
	padding-bottom: 1.2rem;
	@media (max-width: 32em) {
		margin-top: 3px;
		padding-bottom: 0;
	}
`;

//Icons
const HeartImg = styled(HeartIcon)`
	height: 2.4rem;
	@media (max-width: 44em) {
		height: 12px;
	}
	@media (max-width: 32em) {
		height: 10px;
	}
`;
const ChatImg = styled(ChatIcon)`
	height: 2.4rem;
	@media (max-width: 44em) {
		height: 12px;
	}
	@media (max-width: 32em) {
		height: 10px;
	}
`;
const PlaneImg = styled(PaperAirplaneIcon)`
	height: 2.4rem;
	@media (max-width: 44em) {
		height: 12px;
	}
	@media (max-width: 32em) {
		height: 10px;
	}
`;
const BookMarkImg = styled(BookmarkIcon)`
	height: 2.4rem;
	@media (max-width: 44em) {
		height: 12px;
	}
	@media (max-width: 32em) {
		height: 10px;
	}
`;
////////////////////////

const TextLikes = styled.p`
	line-height: 1.1;
	width: 80%;
	font-size: 0.8rem;
	@media (max-width: 32em) {
		line-height: 1.1;
		width: 90%;
		font-size: 5px;
	}
`;
const TextContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 1;
	& > h2 {
		font-size: 30vw;
	}
`;

const TextLeft = styled.h2`
	color: black;
`;
const TextRight = styled.h2`
	color: white;
`;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
`;
const WhiteBackground = styled.div`
	width: 50%;
	background-color: white;
`;
const OrangeBackground = styled.div`
	width: 50%;
	background-color: #e38547;
`;

const Carousell = styled(Swiper)``;

const DigiHeader = () => {
	const [domLoaded, setDomLoaded] = useState(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);
	return (
		<UpperContainer>
			<KryImg>
				<div>
					<Phone>
						<Image width={950} height={1700} src="/Phone.png" alt="Iphone" />
					</Phone>
					{domLoaded && (
						<Swipes>
							<Carousell
								id="swiper-color"
								slidesPerView={1}
								spaceBetween={0}
								loop={true}
								style={{ width: "100%", height: "100%" }}
							>
								<SwiperSlide>
									<Swipe>
										<FirstSlide>
											<WhiteSide>
												<OrangeCicle />
												<LeftArrow>
													<SwipeArrow />
												</LeftArrow>
											</WhiteSide>
											<OrangeSide>
												<WhiteCicle />
												<RightArrow>
													<SwipeArrow />
												</RightArrow>
											</OrangeSide>
										</FirstSlide>
									</Swipe>
								</SwiperSlide>
								<SwiperSlide>
									<Swipe>
										<SecondSlide>
											<ProfileInfo>
												<ProfileImg>
													<Image
														width={1000}
														height={1000}
														src="/Startbild.svg"
														alt="Jakob Kitzing"
													/>
												</ProfileImg>
												<p>
													<b>JakobKitzingDesign</b> <br /> sponsored
												</p>
											</ProfileInfo>
											<SwiperImg>
												<Carousell
													id="swiper-color"
													slidesPerView={1}
													spaceBetween={0}
													pagination={{
														clickable: false,
													}}
													loop={true}
													style={{ width: "100%", height: "100%" }}
												>
													<SwiperSlide>
														<ImgContainer>
															<Image
																width={1000}
																height={600}
																src="/kry-stor/eldler-stor.jpg"
																alt="Time Line"
															/>
														</ImgContainer>
													</SwiperSlide>
													<SwiperSlide>
														<ImgContainer>
															<Image
																layout="responsive"
																width={1000}
																height={700}
																src="/kry-stor/ely-stor.jpg"
																alt="Ely comercial"
															/>
														</ImgContainer>
													</SwiperSlide>
													<SwiperSlide>
														<ImgContainer>
															<Image
																width={1000}
																height={560}
																src="/kry-stor/jury-stor.jpg"
																alt="Time Line"
															/>
														</ImgContainer>
													</SwiperSlide>
													<SwiperSlide>
														<ImgContainer>
															<Image
																width={1000}
																height={600}
																src="/kry-stor/gyno-stor.jpg"
																alt="Time Line"
															/>
														</ImgContainer>
													</SwiperSlide>
												</Carousell>
											</SwiperImg>
											<Iconer>
												<div>
													<HeartImg />
													<ChatImg />
													<PlaneImg />
												</div>
												<BookMarkImg />
											</Iconer>
											<TextLikes>
												<b>4m likes</b> <br /> Häng med in i framtiden, alla
												appar går att finna på JakobKitzingDesign.com
											</TextLikes>
										</SecondSlide>
									</Swipe>
								</SwiperSlide>
							</Carousell>
						</Swipes>
					)}
				</div>
			</KryImg>

			<TextContainer>
				<TextLeft>SWI</TextLeft>
				<TextRight>PE</TextRight>
			</TextContainer>
			<Container>
				<WhiteBackground />
				<OrangeBackground />
			</Container>
		</UpperContainer>
	);
};

export default DigiHeader;
