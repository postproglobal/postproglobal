import Story from "../components/about/story";
import BreadCrumb from "../components/common/Breadcrumb";
import About from "../components/home-one/about";
import AutoSlider from "../components/home-one/auto-slider";
import Teams from "../components/home-one/teams";
// Teams images
import Team1Img from "../assets/images/team/1.jpg";
import Team2Img from "../assets/images/team/2.jpg";
import Team3Img from "../assets/images/team/3.jpg";
import Team4Img from "../assets/images/team/4.jpg";
import Team5Img from "../assets/images/team/5.jpg";
import Team6Img from "../assets/images/team/6.jpg";
import Team7Img from "../assets/images/team/7.jpg";
import Team8Img from "../assets/images/team/8.jpg";

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

function AboutUs() {
	return (
		<>
			<BreadCrumb title="About Us" />
			<About />
			<Story />
			{/* <AutoSlider /> */}
			<Teams teams={teamsData} />
		</>
	);
}

export default AboutUs;
