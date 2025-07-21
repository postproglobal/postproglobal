import { Link } from "react-router-dom";
function ProjectCard({ project: { title, description, img } }) {
	return (
		<div className="swiper-slide">
			<div className="aximo-project-thumb">
				<img src={img} alt={title} loading="lazy" />
				<div className="aximo-project-wrap">
					<div className="aximo-project-data">
					{/* <Link to="/single-portfolio"> */}
					<span>
					<h3>{title}</h3>
						</span>
						<p>{description}</p>
					</div>
					<span className="aximo-project-icon">
						<svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
								stroke="#FDFDE1"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</span>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
