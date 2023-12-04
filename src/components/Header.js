import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import Logo from "../assets/img/logo123.png";

const Title = () => {
    return (
      <h3 id="t1" key="t1" className="p-6 pl-10 text-2xl text-cyan-800">
       Foodie
      </h3>
    );
  };

  const Header = () => {
    const isOnline = useOnline();
    const [islogin  ,setislogin] = useState(false);
    const cartItems = useSelector(store=>store.cart.items);
   
    return (
      <div className="flex h-15 bg-purple-300 justify-between shadow-lg">
        <Title />
        <div className="nav-items ">
          <ul className="flex py-6 mx-2  ">
            <li className="px-5"><Link to="/">Home</Link></li>
            <li className="px-5"><Link to="/contactus">ContactUs</Link></li>
             <li className="px-5"> <Link to="/about">AboutUs</Link> </li> 
            <li className="px-5"><Link to="/cart" data-testid="cart"> Cart-{cartItems.length}</Link></li>
            <li className="px-5"><Link to="/instamart"> Instamart</Link></li>
          </ul>
        </div>
        {/* <h1 className="m-5" data-testid="onlinestatus" >{ isOnline ?    "Offline" : "Online"  }</h1> */}
        {islogin? <button onClick={()=>setislogin(false)} className="m-5"> Logout</button>:<button onClick={()=>setislogin(true)} className="m-5"> Login</button>}
      </div>
    );
  };
  export default Header;