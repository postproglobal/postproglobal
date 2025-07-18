import { Link } from "react-router-dom";
import ArrowRightImg from "../../../assets/images/icon/arrow-right.svg";
function ServiceCard({ service: { title, description, icon, img } }) {
	return (
		// <div className="aximo-iconbox-wrap">
		// 	<div className="aximo-iconbox-icon">
		// 		{/* <i className={`${icon}`}></i> */}
		// 		<img src={img} alt="Star2Img" />
		// 	</div>
		// 	<div className="aximo-iconbox-data">
		// 		<h3>{title}</h3>
		// 		<p>{description}</p>
		// 		<span  className="aximo-icon">
		// 			<img src={ArrowRightImg} alt="arrow right" />
		// 		</span>
		// 	</div>
		// </div>
		<div className="aximo-iconbox-wrap">
  <div className="aximo-iconbox-top">
    <div className="aximo-iconbox-icon">
      <img src={img} alt={title} />
    </div>
    <h3>{title}</h3>
  </div>
  <div className="aximo-iconbox-data">
    <p>{description}</p>
    <span className="aximo-icon">
      <img src={ArrowRightImg} alt="arrow right" />
    </span>
  </div>
</div>

	);
}

export default ServiceCard;
