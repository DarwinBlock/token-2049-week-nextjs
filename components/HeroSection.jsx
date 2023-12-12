const HeroSection = () => {
    return (  
        <div className="ban-ner">
            <div className="header-fix-bg"></div>
            <div className="inner-img">
                <div className="container">
                    <div className="inner-text">
                        <img src={'/TOKEN2049-Week-Logo.png'} className="desktop" alt="Banner"/>
                        <img src={'/TOKEN2049-Week-Logo-Stacked.png'} className="mobile" />
                        <p>15 - 21 APRIL 2024 <span className="dxtop">| DUBAI</span> </p>
                        <div className="own-event">

                            <p className="Drinks">

                            The year&apos;s widest range of meetups, workshops, networking drinks and parties - creating unparalleled networking opportunities.           
                            </p>

                            <p className="updts">
                            Watch this space for continuous updates, and join the conversation
                            <br/>
                            by using <b>#TOKEN2049Week</b> on Twitter.
                            </p>
                            <div className="own-evnt-btn d-flex">
                            <a href="https://forms.token2049.com/token2049-week-event-submission" target="_blank">
                                <button className="side-evnt">SUBMIT YOUR EVENT</button>
                            </a>
                            <a className="cursor-pointer" href="https://docs.google.com/spreadsheets/d/1_mUbQe7AjxHMdXzb2rySYgb5YPA2-o8dZN1nAHCICto/edit#gid=0"
                                target="__blank">
                                <button className="hst-own cursor-pointer">SIDE EVENTS SHEET</button>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HeroSection;