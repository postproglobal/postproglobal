import Star2Img from "../../../assets/images/v1/star2.png";
function Content() {
	return (
		<div className="aximo-default-content">
			<h2>
				<span className="aximo-title-animation">
					The Art of Process
					<span className="aximo-title-icon">
						<img src={Star2Img} alt="Star2Img" />
					</span>
				</span>{" "}
				
			</h2>
			<h3 style={{marginBottom: '15px'}}>
			A great video doesn't happen by chance.
			</h3>
			<p>
				Our production process is a blend of creative vision and strategic precision, 
				refined over 8+ years and 250+ projects.
			</p>
			<p>
				From concept development and scripting to storyboarding, filming, and post production, every stage is driven by collaboration, 
				technical excellence, and a deep understanding of your brand.
			</p>
		</div>
	);
}

export default Content;
