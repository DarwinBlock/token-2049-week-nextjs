"use client";

import EventsDate from "@/components/EventDates";
import EventFilters from "@/components/EventFilters";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import { useState } from "react";

const HomePage = () => {
    const [selectedDate, setSelectedDate] = useState("alldates")

    return (  
        <>
            <Navbar/>
            <HeroSection/>
            <div className="t-events">
                <div className="container c-hack">
                    <EventsDate selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                    {/* <div class="alldata tabcontent" id="Su-n"> */}
                        <EventFilters selectedDateFilter={selectedDate}/>
                        {/* <Events/>
                    </div> */}
                </div>
                <NewsLetter/>
                <Footer/>
            </div>
        </>
        
    );
}
 
export default HomePage;