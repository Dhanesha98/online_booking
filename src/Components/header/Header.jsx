import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './header.css';
import { DateRange } from "react-date-range";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
const Header = () => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  },
]);
const [openOptions, setOpenOptions] = useState(false)
const [options, setOptions] = useState({
  adult:1,
  children:0,
  room:1,
})
  return (
    <div className='header'>
      <div className='headerContainer'>
        <h1 className='headerTitle'> A lifetime of Discount? It’s Genius.</h1>
        <p className='headerDetail'>Get rewarded for your travels - unlock instant saving of 10% or more with a free lamabooking account</p>
        <button className='headerButton'>
          Sign In / Register
        </button>

        <div className='headerSearch'>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input type="text" placeholder="Where are you?" className="headerSearchInput"></input>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span onClick={()=>setOpenDate(!openDate)}className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                    <div className="optionCounter">
                    <button className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                    <span className="optionCounterNumber">1</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                    </div>   
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
                    <span className="optionCounterNumber">1</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                  </div>
              </div>
            </div>
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
