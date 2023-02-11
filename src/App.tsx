import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav"
import {Profile} from "./components/Profile/Profile"


function App() {
  return (
    <div className="App">
        <Header/>
        <Nav/>
        <Profile/>
    </div>
  );
}

export default App;