import "./App.css";

import React, { Component } from "react";

import Divider from "./Components/Divider";
import Songs from "./Components/Songs";
import Movies from "./Components/Movies";
import Games from "./Components/Games";
import Home from "./Components/Home";
import LoginPop from './Components/LoginPop'

import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";

export default class App extends Component {
  render() {
   
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<LoginPop/>}/>
        <Route path='/games' element={<Games />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/songs' element={<Songs />} />
        <Route path='SignUp' element={<SignUp/>}/>
      </Routes>
      
    );
  }
}
