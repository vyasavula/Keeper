import React from "react";

function Header() {
  return (
    <header>
      <h1>Keeper</h1>
    </header>
  );
}

export default Header;


import React from "react";
import "./App.css";
import Todo from "./components/todo";
function App() {
  return (
    <div>
      <Todo />
    </div>
  );
}

export default App;



https://play.google.com/store/apps/details?id=com.fastmarket.fm


 <nav>
          {/* <img className="logo" src={logo} alt="Logo"></img> */}
          <img className="logo" src={logocontent} alt="Logo"></img>
          <ul>
            <li>
              <a href="#about-me">About</a>
            </li>
            <li>
              <a href="#projects">Services</a>
            </li>
            <li>
              <a href="#contact-me">Contact</a>
            </li>
            <button className="hamburger" id="hamburger">
              <i className="fas fa-bars"></i>
            </button>
          </ul>
        </nav>