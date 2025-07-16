import { Link } from "react-router-dom";
function TeamCard({ team: { name, designation, img } }) {
	return (
		<div className="aximo-team-wrap">
			<div className="aximo-team-thumb">
				<img src={img} alt={name} />
				<div className="aximo-social-icon team-social">
				</div>
			</div>
			<div className="aximo-team-data">
				<span >
					<h3>{name}</h3>
				</span>
				<p>{designation}</p>
			</div>
		</div>
	);
}

export default TeamCard;
