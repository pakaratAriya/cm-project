import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import classes from './App.module.css';
import Home from './containers/Home/Home'
import About from './components/AboutUsPage/About'
import Contact from './components/ContactPage/Contact'
import HouseInfo from './containers/HouseInfoPage/HouseInfo'
import HousePhotos from './containers/HouseInfoPage/HousePhotos/HousePhotos'
import HouseVideos from './containers/HouseInfoPage/HouseVideos/HouseVideos'
import HouseMaps from './containers/HouseInfoPage/HouseMaps/HouseMaps'
import Listing from './containers/ListingPage/ActiveListings/Listing'

function App() {
  return (
    <div className={classes.App}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/listing/BurnabyLake" exact component={HouseInfo}/>
        <Route path="/listing/BurnabyLake/Photos" exact component={HousePhotos}/>
        <Route path="/listing/BurnabyLake/Videos" exact component={HouseVideos}/>
        <Route path="/listing/BurnabyLake/Maps" exact component={HouseMaps}/>
        <Route path="/listing" exact render={()=><Listing isActive={true}/>}/>
        <Route path="/mlsSearch" exact component={Listing}/>
        <Redirect from="/cm-project" to="/"/>
      </Switch>
    </div>
  );
}

export default App;
