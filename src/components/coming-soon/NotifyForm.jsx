import { useForm } from "react-hook-form";
import FadeInUp from "../animation/FadeInUp";
import Field from "../common/Field";

function NotifyForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submitted Form Data = ", formData);
	};

	return (
		<FadeInUp>
			<form onSubmit={handleSubmit(submitForm)}>
				<div className="aximo-coming-newsletter">
					{/* Center wrapper */}
					<div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
						<a
							href="mailto:postproglobal@gmail.com?subject=Inquiry Regarding PostPro Services"
							style={{
								backgroundColor: "#B6FF47",
								padding: "10px 20px",
								textDecoration: "none",
								color: "black",
								borderRadius: "5px",
								fontWeight: "bold",
							}}
						>
							Contact Us
						</a>
					</div>

					{/* Uncomment if needed */}
					{/* <Field error={errors.email}>
						<input
							{...register("email", { required: "Email is required." })}
							type="email"
							name="email"
							id="email"
							placeholder="Enter your email"
						/>
					</Field>

					<button type="submit" id="aximo-notified-btn">
						Get Notified
					</button> */}

					<p style={{ textAlign: "center" }}>
						We do not share your information with any third party & no spam*
					</p>
				</div>
			</form>
		</FadeInUp>
	);
}

export default NotifyForm;
