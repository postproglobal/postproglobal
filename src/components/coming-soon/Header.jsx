import Logo from "../../assets/images/logo/logo-white.svg";
import LogoMain from "../../assets/images/logo/logo-white.png";

import { Link } from "react-router-dom";
function Header() {
	return (
		<div className="aximo-logo-section">
			<div className="container">
				<Link to="/">
					<img src={LogoMain} height={55} alt="Logo" loading="lazy" />
				</Link>
			</div>
		</div>
	);
}

export default Header;
