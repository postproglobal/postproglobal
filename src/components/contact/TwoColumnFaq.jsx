import Star2Img from "../../assets/images/v1/star2.png";
import QuestionImg from "../../assets/images/icon/question.svg";
const faqData = {
	faq1: [
		{
			id: crypto.randomUUID(),
			title: "What services do you offer?",
			text: "We offer a complete range of creative services from stunning brand films, motion graphics, and visual editing & DI to graphic design and social media content. We make your brand shine at every touchpoint..",
		},
		{
			id: crypto.randomUUID(),
			title: "How do you ensure the final output matches my vision?",
			text: "We involve you throughout each stage, gather feedback actively, and make refinements to ensure the final result aligns with your brand’s personality and goals.",
		},
		{
			id: crypto.randomUUID(),
			title: "Can we see your previous work?",
			text: "Absolutely. You can explore our portfolio on the website to see the diverse range of projects we’ve delivered successfully.",
		},
		{
			id: crypto.randomUUID(),
			title: "How much do your services cost?",
			text: "Our pricing is customized based on your specific needs and project scope. After understanding your goals, we provide transparent, tailored quotes.",
		},
	],
	faq2: [
		{
			id: crypto.randomUUID(),
			title: "What is your process like?",
			text: "Our process is collaborative and detail-driven: from pre-production and planning, to shooting and editing, all the way to final delivery. We focus on strategy, storytelling, and flawless execution.",
		},
		{
			id: crypto.randomUUID(),
			title: "What makes Postpro different from other agencies?",
			text: "We blend artistic passion with strategic thinking, delivering visuals that evoke emotion and build brand connection. Our dedicated team brings creative ideas to life with a distinct style.",
		},
		{
			id: crypto.randomUUID(),
			title: "Can you work with tight deadlines?",
			text: "Yes! We thrive under deadlines and can adapt our process to meet your project timeline without compromising quality.",
		},
		{
			id: crypto.randomUUID(),
			title: "What industries do you work with?",
			text: "We work with brands across various industries from entertainment and advertising to startups and corporate organizations, adapting our approach to each unique story.",
		},

	],
};
function TwoColumnFaq() {
	return (
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						These FAQs help
						<span className="aximo-title-animation">
							clients learn about us
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star" loading="lazy" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap responsive-margin">
							{faqData.faq1.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<img src={QuestionImg} alt="QuestionImg" loading="lazy" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap">
							{faqData.faq2.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<img src={QuestionImg} alt="QuestionImg" loading="lazy" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TwoColumnFaq;
