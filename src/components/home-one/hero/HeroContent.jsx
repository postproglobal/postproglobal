import { Link } from "react-router-dom";
import StarImg from "../../../assets/images/v1/star.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function HeroContent() {
	return (
		<div className="aximo-hero-content">
			<FadeInStaggerTwo>
				<FadeInStaggerTwoChildren>
					<h1>
						<span className="aximo-title-animation">
						Welcome to
							<img src={StarImg} alt="StarImg" loading="lazy" />
						</span>{" "}
						Our Creative Playground
					</h1>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<p>
						{`We turn ideas into impactful visual experiences.
							Concept to Result, we blend creativity and strategy to craft unskippable visuals.`}
					</p>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>

				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;
