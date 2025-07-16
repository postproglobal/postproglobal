// import ArrowRight3Img from "../../../assets/images/icon/arrow-right3.svg";
// import { useForm } from "react-hook-form";
// import Field from "../../common/Field";

// function MessageForm() {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors },
// 	} = useForm();
// 	const submitForm = (formData) => {
// 		console.log("Submite Form Data = ", formData);
// 	};

// 	return (
// 		<form onSubmit={handleSubmit(submitForm)}>
// 			<div className="aximo-form-field">
// 				<Field error={errors.name}>
// 					<input
// 						{...register("name", { required: "Name is required." })}
// 						type="text"
// 						name="name"
// 						id="name"
// 						placeholder="Your Name"
// 					/>
// 				</Field>
// 			</div>
// 			<div className="aximo-form-field">
// 				<Field error={errors.email}>
// 					<input
// 						{...register("email", { required: "Email is required." })}
// 						type="email"
// 						name="email"
// 						id="email"
// 						placeholder="Your email address"
// 					/>
// 				</Field>
// 			</div>
// 			<div className="aximo-form-field">
// 				<input type="text" placeholder="+088-234-6849" />
// 			</div>
// 			<div className="aximo-form-field">
// 				<textarea name="textarea" placeholder="Write your message here..."></textarea>
// 			</div>
// 			<button id="aximo-submit-btn" type="submit">
// 				Send message{" "}
// 				<span>
// 					<img src={ArrowRight3Img} alt="ArrowRight3Img" />
// 				</span>
// 			</button>
// 		</form>
// 	);
// }

// export default MessageForm;

import ArrowRight3Img from "../../../assets/images/icon/arrow-right3.svg";
import { useForm } from "react-hook-form";
import Field from "../../common/Field";
import { supabase } from "../../../supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MessageForm() {
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
		<>
			<ToastContainer /> {/* Toast container */}
			<form onSubmit={handleSubmit(submitForm)}>
				<div className="aximo-form-field">
					<Field error={errors.name}>
						<input
							{...register("name", { required: "Name is required." })}
							type="text"
							id="name"
							placeholder="Your Name"
						/>
					</Field>
				</div>
				<div className="aximo-form-field">
					<Field error={errors.email}>
						<input
							{...register("email", { required: "Email is required." })}
							type="email"
							id="email"
							placeholder="Your email address"
						/>
					</Field>
				</div>
				<div className="aximo-form-field">
					<Field error={errors.phone}>
						<input
							{...register("phone", { required: "Phone is required." })}
							type="text"
							id="phone"
							placeholder="+088-234-6849"
						/>
					</Field>
				</div>
				<div className="aximo-form-field">
					<Field error={errors.message}>
						<textarea
							{...register("message", { required: "Message is required." })}
							id="message"
							placeholder="Write your message here..."
						></textarea>
					</Field>
				</div>
				<button id="aximo-submit-btn" type="submit">
					Send message{" "}
					<span>
						<img src={ArrowRight3Img} alt="ArrowRight3Img" />
					</span>
				</button>
			</form>
		</>
	);
}

export default MessageForm;
