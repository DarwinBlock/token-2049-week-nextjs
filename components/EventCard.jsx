const EventCard = ({
	day = "Mon",
	date = 12,
	startTime = "02:00 PM",
	endTime = "09:00 PM",
	eventName = "Champ Medici x Gushcloud By REPUBLIK",
	eventCategory = "Other",
	eventType = "Paid",
	imgStr,
	registrationLink,
	isFeatured,
}) => {
	return (
		<div className={isFeatured ? "p-1 rounded-lg flex flex-col bg-primary-500" : ""}>
			{isFeatured && <p className="font-semibold my-2 ml-5 font-primary text-white">Featured Event</p>}
			<div className="eventsWrappers workshop-btn free-div">
				<div className={"col-sm-6 col-6 card-style col-md-2 " + (isFeatured ? "rounded" : "")}>
					<div className="col-md-3 ">
						<div className="onlydates  only-dates-show">
							<div className="week">{day}</div>
							<div className="day">{date}</div>
						</div>
						<h4>
							<span>
								<i className="fa fa-clock-o"></i>
								{startTime}
								<br /> {endTime}
							</span>
						</h4>
					</div>
					<div className="col-md-6 event_dv_inner">
						<div className="evnt-img">
							<img className="img" src={imgStr} alt="img" />
						</div>
						<div className="ryt-cntnt">
							<h3>{eventName}</h3>
							<h4>
								<span id="workshop"> {eventCategory} </span>
								<span id="price"> {eventType}</span>
							</h4>
						</div>
					</div>
                    {
                        (registrationLink && registrationLink.length > 0)?
                        <div className="col-md-3">
                            <a target="blank" href={registrationLink}>
                                <button>Register</button>
                            </a>
                        </div>
                        :
                        <div className="col-md-3">
                            <a href="#">
                                <button>Coming Soon</button>
                            </a>
                        </div>
                    }
				</div>
			</div>
		</div>
	);
};

export default EventCard;
