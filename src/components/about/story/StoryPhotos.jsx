import Story1Img from "../../../assets/images/about/image-01.webp";
import Story2Img from "../../../assets/images/about/image-02.webp";
import Story3Img from "../../../assets/images/about/image-03.webp";
import Story4Img from "../../../assets/images/about/image-04.webp";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function StoryPhotos() {
	return (
		<FadeInStaggerTwo className="row">
			<FadeInStaggerTwoChildren className="col-lg-7">
				<div className="aximo-story-thumb">
					<img src={Story2Img} alt="Story1Img" />
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="col-lg-5">
				<div className="aximo-story-thumb">
					<img src={Story3Img} alt="StroryIMg 2" />
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="col-lg-5">
				<div className="aximo-story-thumb">
					<img src={Story4Img} alt="StoryImg 3" />
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="col-lg-7">
				<div className="aximo-story-thumb">
					<img src={Story1Img} alt="Story4Img" />
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default StoryPhotos;
