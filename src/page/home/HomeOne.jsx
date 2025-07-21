import About from "../../components/home-one/about";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
import Teams from "../../components/home-one/teams";
import BrandLogo from "../../components/home-one/brand-logo";
import WhyChooseUs from "../../components/home-one/why-choose-us";

// Teams images
import Team1Img from "../../assets/images/team/1.jpg";
import Team2Img from "../../assets/images/team/2.jpg";
import Team3Img from "../../assets/images/team/3.jpg";
import Team4Img from "../../assets/images/team/4.jpg";
import Team5Img from "../../assets/images/team/5.jpg";
import Team6Img from "../../assets/images/team/6.jpg";
import Team7Img from "../../assets/images/team/7.jpg";
import Team8Img from "../../assets/images/team/8.jpg";

import GraphicDesing from "../../assets/images/services/graphic-design.png";
import MotionGraphic from "../../assets/images/services/motion-graphic.png"
import VideoProduction from "../../assets/images/services/video-production.png"
import VisualEditing from "../../assets/images/services/visual-editing-di.png"

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Video Production",
		description:
			"We craft bold, story-driven visuals that turn brands into experiences. From concept to final cut, our videos spark emotion, build connection, and bring your brand to life frame by frame.",
		icon: "icon-design-tools",
		img: VideoProduction
	},
	{
		id: crypto.randomUUID(),
		title: "Visual Editing & DI",
		description:
		"We turn raw footage into something awesome  smooth edits, perfect colors, cinematic color grading, and just the right vibe. Whether it’s a film, ad, or reel, we give it that final spark to shine.",
		icon: "icon-web",
		img: VisualEditing
	},
	{
		id: crypto.randomUUID(),
		title: "Motion Graphics",
		description:
			"Bring your brand to life through animation. We create dynamic motion graphics that add energy and depth to your content, perfect for social media, presentations, explainer videos, and more.",
		icon: "icon-design-thinking",
		img: MotionGraphic
	},
	{
		id: crypto.randomUUID(),
		title: "Graphic Design",
		description:
			"Visual storytelling with impact.From branding to marketing collateral, we design stunning visuals that speak your brand’slanguage and leave a lasting impression.",
		icon: "icon-branding",
		img: GraphicDesing
	},
];

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Bibin",
		designation: "Creative Director",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Vibin Babu",
		designation: "Cinematographer",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Hardy",
		designation: "Video Editor",
		img: Team4Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Akash",
		designation: "VFX Artist",
		img: Team5Img,
	},	
	{
		id: crypto.randomUUID(),
		name: "Gaya Raghu",
		designation: "Graphic Designer",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Akash",
		designation: "Web Developer",
		img: Team6Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Shavin",
		designation: "DI Colourist",
		img: Team7Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Aswin Das",
		designation: "Project Manager",
		img: Team8Img,
	},
];

function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<Projects />
			<WhyChooseUs />
			<BrandLogo />
			<Teams teams={teamsData} />
		</>
	);
}

export default HomeOne;
