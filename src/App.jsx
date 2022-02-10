import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux';

import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home'
import Info from './pages/Info'
import Message from './pages/Message'
import Shop from './pages/Shop'


import store from './redux/store';


function App() {

  return (
    <div className="App">

      <Provider store={store}>

      

        <Home />




      </Provider>


    </div>
  )
}

export default App;
