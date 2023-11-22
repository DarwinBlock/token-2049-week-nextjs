const EventCard = ({
    day = "Mon",
    date = 12,
    startTime = "02:00 PM",
    endTime = "09:00 PM",
    eventName = "Champ Medici x Gushcloud By REPUBLIK",
    eventCategory = "Other",
    eventType = "Paid",
    imgStr,
    registerationLink
}) => {

    return (  
        <div className="eventsWrappers workshop-btn free-div">
            <div className="col-sm-6 col-6 card-style col-md-2 ">
                <div className="col-md-3 ">
                    <div className="onlydates  only-dates-show"> 
                        <div className="week">{day}</div>
                        <div className="day">{date}</div>  
                    </div>
                    <h4><span><i className="fa fa-clock-o"></i>{startTime}<br/> {endTime}</span></h4>
                </div>
                <div className="col-md-6 event_dv_inner">
                    <div className="evnt-img">
                        <img className="img" src={imgStr} alt="img"/>
                    </div>
                    <div className="ryt-cntnt">
                        <h3>{eventName}</h3>
                        <h4>
                            <span id="workshop"> {eventCategory} </span>
                            <span id="price"> {eventType}</span>
                        </h4>
                    </div>
                </div>

                <div className="col-md-3">
                    <a target="blank" href={registerationLink}>
                        <button>
                            Register
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default EventCard;