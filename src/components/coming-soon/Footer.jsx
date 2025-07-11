import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/logo-white.svg";
import LogoMain from "../../assets/images/logo/logo-white.png";

function Footer() {
	return (
		<footer className="aximo-footer-section dark-bg">
			<div className="container">
				<div className="aximo-footer-bottom">
					<div className="row">
						<div className="col-lg-6">
							<div className="aximo-footer-logo">
								<Link to="/">
									<img src={LogoMain} height={55} alt="logo" />
								</Link>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="aximo-copywright one">
								<p> &copy; Copyright 2024, All Rights Reserved by PostPro</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
