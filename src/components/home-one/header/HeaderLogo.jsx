import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo/logo-white.svg";
import LogoMain from "../../../assets/images/logo/logo-white.png";

function HeaderLogo() {
	return (
		<div className="brand-logo">
			<Link to="/">
				<img src={LogoMain} alt="Logo" height={55} className="light-version-logo" loading="lazy" />
			</Link>
		</div>
	);
}

export default HeaderLogo;
