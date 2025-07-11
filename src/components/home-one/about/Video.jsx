import { useState } from "react";
import ModalVideo from "react-modal-video";
import PlayBtnImg from "../../../assets/images/v1/play-btn.svg";
import VideoBg from "../../../assets/images/v1/video-bg.png";
import FadeInUp from "../../animation/FadeInUp";

function Video() {
	const [isOpen, setOpen] = useState(false);

	return (
		<FadeInUp className="aximo-video-wrap">
			<img src={VideoBg} alt="VideoBg" />
			<ModalVideo
				channel="youtube"
				youtube={{ 
					autoplay: 1,
					modestbranding: 1,
					showinfo: 0,
					rel: 0,
				 }}
				isOpen={isOpen}
				videoId="jbd1cauZzGg?si=YlpyR1vWiRaSN9kI"
				onClose={() => setOpen(false)}
			/>
			<button className="aximo-video-popup play-btn1 video-init" onClick={() => setOpen(true)}>
				<img src={PlayBtnImg} alt="PlayBtnImg" />
			</button>
		</FadeInUp>
	);
}

export default Video;
