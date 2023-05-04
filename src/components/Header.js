import { useState } from "react";

import { Link } from "react-router-dom";

import useOnline from "../utils/useOnline";

import { useSelector } from "react-redux";

const loggedInUser = () => {
return false;
};


const Title = () => (
    <a href="/">
      <img className="h-28 p-2" alt="logo" 
      src = "https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj">
      </img>
      </a>
  );

 

const Header = () => {
const[isLoggedIn, setIsLoggedIn] = useState(false);
const isOnline = useOnline();
const cartItems = useSelector(store => store.cart.items);
  return(
      <div className="flex justify-between bg-pink-50 shadow-lg">
        <Title /> 
      <div className="nav-items">
      <ul className="flex py-10">
        <Link to="/"><li className="px-2">Home</li></Link>
        <Link to="/about"><li className="px-2">About</li></Link>
        <Link to="/contact"><li className="px-2">Contact</li></Link>
        <Link to="/instamart"><li className="px-2">Instamart</li></Link>
        <Link to="/cart"><li className="px-2">Cart - {cartItems.length} items</li></Link>
        <h1>{isOnline?"abc" : "xyz"}</h1>
      </ul>
      </div>
      {isLoggedIn ? (<button onClick={() => setIsLoggedIn(false)}>Logout</button>
       ) : ( 
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
      </div>
    );
  };


  export default Header;