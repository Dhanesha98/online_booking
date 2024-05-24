import React from 'react';
import "./destinationList.css";

const DestinationList = () => {
  return (
    
    <div className='dList'>
    <div className='dTitle'>
        <h2>
            Trending Destinations
        </h2>
    </div>
    <div className='dItems'>
    <div className='row'>
        <div className='column image-container'>
          <img src="../assets/kandy.jpg" alt="Image 1" className='image'/>
            <div className='imageText'>Kandy</div>
        </div>
        <div className='column image-container'>
          <img src="../assets/nuwaraeliya.jpg" alt="Image 2" className='image'/>
          <div className='imageText'>Nuwara Eliya</div>
        </div>
      </div>
      <div className='row'>
        <div className='column image-container'>
          <img src="../assets/colombo.jpg" alt="Image 3" className='image'/>
          <div className='imageText'>Colombo</div>
        </div>
        <div className='column image-container'>
          <img src="../assets/dubai.jpg" alt="Image 4" className='image'/>
          <div className='imageText'>Dubai</div>
        </div> 
        <div className='column image-container'>
          <img src="../assets/kuala.jpg" alt="Image 5" className='image'/>
          <div className='imageText'>Kuala Lumpur</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DestinationList;
