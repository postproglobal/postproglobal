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
					<img src={Story2Img} alt="Story1Img" loading="lazy" />
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="col-lg-5">
				<div className="aximo-story-thumb">
					<img src={Story3Img} alt="StroryIMg 2" loading="lazy" />
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="col-lg-5">
				<div className="aximo-story-thumb">
					<img src={Story4Img} alt="StoryImg 3" loading="lazy" />
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="col-lg-7">
				<div className="aximo-story-thumb">
					<img src={Story1Img} alt="Story4Img" loading="lazy" />
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default StoryPhotos;
