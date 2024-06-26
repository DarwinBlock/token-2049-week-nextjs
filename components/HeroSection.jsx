const HeroSection = () => {
	return (
		<div className="ban-ner">
			{/* <div className="header-fix-bg"></div> */}
			<div className="inner-img">
				<div className="container flex items-center">
					<div className="inner-text">
						<img src={"/TOKEN2049-Week-Logo.png"} className="desktop" alt="Banner" />
						{/* <img src={"/TOKEN2049-Week-Logo-Stacked.png"} className="mobile" /> */}
						<p className="event-date">
							15 - 21 APRIL 2024 <span className="dxtop">| DUBAI</span>{" "}
						</p>
						<div className="own-event">
							<p className="Drinks">
								Experience the year&apos;s widest range of meetups, workshops, networking events, hackathons, and parties, providing
								unparalleled networking opportunities.
							</p>

							<p className="updts">
								Watch this space for continuous updates, and join the conversation <br />
								by using <b>#TOKEN2049Week</b> on Twitter.
							</p>
							<div className="own-evnt-btn d-flex">
								<a
									className="cursor-pointer"
									href="https://docs.google.com/spreadsheets/d/1_mUbQe7AjxHMdXzb2rySYgb5YPA2-o8dZN1nAHCICto/edit#gid=0"
									target="__blank"
								>
									<button className="side-evnt cursor-pointer">SIDE EVENTS SHEET</button>
								</a>
							</div>
						</div>
						<div className="vector-div">
							<img src={"/Vector.svg"} alt="vector" className="vector-arrow" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
