import axios from "axios";
import { useEffect, useState } from "react";
import { website_url } from "@/config/constants";
import parse from 'html-react-parser'

const EventFilters = ({selectedDateFilter}) => {
    const [filterBtnData, setFilterBtnData] = useState(null);
    const [eventCardData, setEventCardData] = useState(null);
    useEffect(() => {
        axios.post(`${website_url}events/data/?${selectedDateFilter}`).then((res) => {
            setFilterBtnData(res.data.btn);
            setEventCardData(res.data.data);
        })
    }, [selectedDateFilter]);

    return (  
        <div class="alldata tabcontent" id="Su-n">
            <div class="fillers">
              <div class="row">
                <div class="col-lg-12 filter-btb d-flex">
                  <div class="ma-in">
                    <div id="all-buttons">
                      <div id="function-buttons"> 
                        {filterBtnData && parse(filterBtnData)}
                      </div>
                      <div class="mobile">
                        <div id="payment-buttons">
                          <div class="ptm desk" id="ptm">
                            <button data-but_id="free-div" class="Free paymentbtn typebtn">Free</button>
                            <button data-but_id="paid-div" class="Paid paymentbtn typebtn">Paid</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class={"e-divs " + (selectedDateFilter === 'alldates'? "all_div-parent":"")} id="events-div">
              {eventCardData && parse(eventCardData)}
            </div>
        </div>
    );
}
 
export default EventFilters;