import LogoWhiteImg from "../../../assets/images/logo/logo-white.svg";
import LogoMain from "../../../assets/images/logo/logo-white.png";

function FooterBottom() {
	return (
		<>
			<div className="col-lg-6">
				<div className="aximo-footer-logo">
					<a href="">
						<img src={LogoMain} height={55} alt="Logo" />
					</a>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="aximo-copywright one">
					<p> &copy; Copyright 2024, All Rights Reserved by Mthemeus</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
