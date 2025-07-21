import { useForm } from "react-hook-form";
import ContactThumb from "../../assets/images/contact/contactus-02.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import FadeInRight from "../animation/FadeInRight";
import Field from "../common/Field";
import { supabase } from "../../supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const submitForm = async (formData) => {
		console.log("Submit Form Data = ", formData);

		const { error } = await supabase.from("contact_us").insert([
			{
				name: formData.name,
				email: formData.email,
				phone: formData.phone,
				message: formData.message,
			},
		]);

		if (error) {
			console.error("Error inserting data: ", error.message);
			toast.error("There was an error sending your message.");
		} else {
			toast.success("Thank you! Your message has been sent.");
			reset();
		}
	};

	return (
		<div className="section aximo-section-padding">
			<ToastContainer /> {/* ✅ Add this container once in the component */}
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="aximo-section-title">
							<h2>
								<span className="aximo-title-animation">
									Contact us for a
									<span className="aximo-title-icon">
										<img src={Star2Img} alt="Star" loading="lazy" />
									</span>
								</span>
								personal experience
							</h2>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="aximo-contact-thumb">
							<img src={ContactThumb} alt="Contact Thumb" loading="lazy" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="aximo-main-form">
							<form onSubmit={handleSubmit(submitForm)}>
								<div className="aximo-main-field">
									<Field label="Your Name" error={errors.name}>
										<input
											{...register("name", { required: "Name is required." })}
											type="text"
											id="name"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter email address" error={errors.email}>
										<input
											{...register("email", { required: "Email is required." })}
											type="email"
											id="email"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter Phone Number" error={errors.phone}>
										<input
											{...register("phone", { required: "Phone is required." })}
											type="text"
											id="phone"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Write your message here..." error={errors.message}>
										<textarea
											{...register("message", { required: "Message is required." })}
											id="message"
										></textarea>
									</Field>
								</div>
								<button id="aximo-main-btn" type="submit">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
