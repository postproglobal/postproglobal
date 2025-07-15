import BreadCrumb from "../components/common/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import GoogleMap from "../components/contact/GoogleMap";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";
function ContactUs() {
	const location = {
		center: {
			lat: 11.26247274445754,
			lng: 75.80978271349106,
		},
		zoom: 11,
	};
	return (
		<>
			<BreadCrumb title="Contact Us" />
			<ContactForm />
			<ContactInfo />
			{/* <GoogleMap location={location} /> */}
			<TwoColumnFaq />
		</>
	);
}

export default ContactUs;
