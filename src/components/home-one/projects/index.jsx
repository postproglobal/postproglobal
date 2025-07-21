import Star2Img from "../../../assets/images/v1/star2.png";

// import Project1Img from "../../../assets/images/v1/project1.png";
// import Project2Img from "../../../assets/images/v1/project2.png";
// import Project3Img from "../../../assets/images/v1/project3.png";
// import Project4Img from "../../../assets/images/v1/project4.png";

import Project1Img from "../../../assets/images/projects/TVC V2.jpg"
import Project2Img from "../../../assets/images/projects/BRAND FILMS.webp"
import Project3Img from "../../../assets/images/projects/EDITING AND DI.webp"
import Project4Img from "../../../assets/images/projects/MOTION GRAPHIC .webp"
import Project5Img from "../../../assets/images/projects/GRAPHIC DESIGN.webp"
import Project6Img from "../../../assets/images/projects/DIGITAL MARKETING V2.webp"
import Project7Img from "../../../assets/images/projects/WEB DESIGN.webp"
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "TVC",
		description: "Explore commercials crafted to capture attention, drive engagement, and leave a lasting brand impression.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Brand Film",
		description: "Authentic voices, compelling narratives, From concept to post production, Our podcast work showcases powerful conversations and immersive audio design.",
		img: Project2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Visual Editing & DI",
		description: "Polished to perfection. Dive into our post production world where raw footage transforms into vivid stories through precise editing and color grading.",
		img: Project3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Motion Graphics",
		description: "Dynamic design in motion. See how we bring ideas to life with animated visuals that educate, excite, and enhance brand storytelling.",
		img: Project4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Graphic Design",
		description: "Visual communication with impact. Our graphic design portfolio blends strategy and creativity, delivering distinctive visuals across print and digital formats.",
		img: Project5Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Web Design",
		description: "Your website is your digital first impression. Post Pro designs and builds beautiful, functional sites that connect with your audience and make your business shine.",
		img: Project7Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Digital Marketing",
		description: "At Post Pro, we help your brand shine online. We connect your unique story with the right audience, turning clicks into conversations. Let's grow together!.",
		img: Project6Img,
	},
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Logo and Branding",
	// 	description: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
	// 	img: Project2Img,
	// },
];

const swiperSettings = {
	spaceBetween: 24,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination, Mousewheel],
	mousewheel: true,
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 3.5,
		},
	},
};
function Projects() {
	return (
		<div className="section dark-bg aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center light">
					<h2>
						Have a wide range of
						<span className="aximo-title-animation">
							creative projects
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star2Img" loading="lazy" />
							</span>
						</span>
					</h2>
				</div>
			</div>
			<div className="swiper aximo-project-slider">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;
