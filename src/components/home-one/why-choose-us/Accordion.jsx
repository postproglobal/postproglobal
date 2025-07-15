import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";

function Accordion() {
	return (
		<FadeInStaggerTwo className="accordion aximo-accordion-wrap" id="aximo-accordion">
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header">
					<button
						className="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseOne"
					>
						01/ Pre Production
					</button>
				</h3>
				<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
						We develop concepts, scripts, and plan every detail to set a strong foundation for the project.
					</div>
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header" id="headingOne">
					<button
						className="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseTwo"
					>
						02/ Production
					</button>
				</h3>
				<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
						We bring ideas to life through filming and creative execution with technical precision.
					</div>
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseThree"
					>
						03/ Post Production
					</button>
				</h3>
				<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
						We refine, edit, and finalize the video, delivering a polished final product ready to launch.
					</div>
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default Accordion;
