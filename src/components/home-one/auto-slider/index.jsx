import Star3Img from "../../../assets/images/v1/star3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Client1Img from "../../../assets/images/v4/b_1.png"
import Client2Img from "../../../assets/images/v4/b_2.png"
import Client3Img from "../../../assets/images/v4/b_3.png"
import Client4Img from "../../../assets/images/v4/b_4.png"
import Client5Img from "../../../assets/images/v4/b_5.png"
import Client6Img from "../../../assets/images/v4/b_6.png"
import Client7Img from "../../../assets/images/v4/b_7.png"

const sliderData = [
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Client1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Client2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Client3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Client4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Client5Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Client6Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Client7Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
];

const swiperSettings = {
	centeredSlides: true,
	speed: 6000,
	autoplay: {
		delay: 1,
	},
	loop: true,
	slidesPerView: "auto",
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 1,
	breakpoints: {
		300: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
	},
};

function AutoSlider() {
	return (
		<div className="aximo-auto-slider-section">
			<div className="swiper aximo-auto-slider">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="aximo-auto-slider-item">
									{/* <h3>{item.title}</h3> */}
									<img src={item.img} alt={item.title} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</div>
	);
}

export default AutoSlider;
