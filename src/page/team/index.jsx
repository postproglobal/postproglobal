import BreadCrumb from "../../components/common/Breadcrumb";
import Teams from "../../components/home-one/teams";
// Team member images
import Team1Img from "../../assets/images/team/1.jpg";


const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Andrew Mark",
		designation: "Creative Director",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Jack Taylor",
		designation: "Senior Designer",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Martine Joy",
		designation: "Project Manager",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Adam Straw",
		designation: "Web Developer",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "William Jack",
		designation: "Creative Director",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Alex Tom",
		designation: "UI/UX Designer",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Robin Lesser",
		designation: "Chief Executive Officer",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Sheikh David",
		designation: "HR Director",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Mark Strew",
		designation: "UI Designer",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Fradik Hazbag",
		designation: "Researcher",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Sam Kainiz",
		designation: "Lead Developer",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Mac Jackson",
		designation: "Marketing Expert",
		img: Team1Img,
	},
];
function Team() {
	return (
		<>
			<BreadCrumb title="Our Team" />
			<Teams teams={teamsData} />
		</>
	);
}

export default Team;
