import { NavLink } from "react-router-dom";

import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
      <div className="   ">
        <div className="flex flex-raw  justify-around bg-indigo-950 h-16">
          <NavLink to="/">
            <div>
              <img className=" h-14  w-20" src="https://ecomzy-shopping-cart.vercel.app/logo.png" alt="" />
            </div>
          </NavLink>

          <div className="flex flex-raw justify-between text-white my-5  ">
            <NavLink to="/">
              <p className=" mx-3">Home</p>
            </NavLink>
            <NavLink to="/cart
            ">
              <div className=" my-1 mx-2 " ><IoCartOutline/></div>
            </NavLink>
          </div> 
        </div>
      </div>
  )
};

export default Navbar;
