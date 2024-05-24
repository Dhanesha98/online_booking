import React from 'react';
import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";
import PropertyList from '../../Components/propertyList/PropertyList';
import DestinationList from '../../Components/destinations/DestinationList';
import './home.css';

const Home = () => {
  return (
    <div>
     <Navbar />
     <Header />
     <PropertyList/>
     <DestinationList/>
    </div>
  )
}

export default Home;
