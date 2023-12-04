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
                            <a href="https://docs.google.com/spreadsheets/d/1VsaSldp5dAhx34q_1cRgW_3mEPsbiLPMLGGRfBP5D8w/edit#gid=0"
                                target="__blank">
                                <button className="side-evnt">SIDE EVENTS SHEET</button></a>
                            
                                <button className="hst-own">EVENTS SUBMISSION CLOSED</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HeroSection;