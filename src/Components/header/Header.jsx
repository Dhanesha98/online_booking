import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './header.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const header = () => {
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
          <input type="text" placeholder="Check-in date - Check-out date" className="headerSearchInput"></input>
          </div>
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon" />
          <input type="text" placeholder="2 adults · 0 children · 1 room" className="headerSearchInput"></input>
          </div>
          <div className="headerSearchItem">
                <button className="headerBtn" >
                  Search
                </button>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default header
