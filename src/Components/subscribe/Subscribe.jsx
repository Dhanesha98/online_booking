import React from 'react'
import './subscribe.css'

const Subscribe = () => {
  return (
    <div className='emailList'>
        <div className='emailcontent'>
            <div className='content'>
            <h1>Stay in the know</h1>
            <p>Sign up to get marketing emails from Booking.com, including promotions, rewards, travel experiences and information about IamBooking and IamBooking Transport Limited’s products and services.</p>
            </div>
            <div className='buttons'>
                <div className='email-address'>
                    <input type='email' placeholder='Your email Address' className='emailAd'/>
                    <button className='subscribeBtn'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe
