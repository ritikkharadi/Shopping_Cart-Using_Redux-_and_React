import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem"
import { NavLink } from "react-router-dom";


const Cart = () => {
const{cart}=useSelector((state)=>state);
const[totalamount,settotalamount]=useState(0);
useEffect(()=>{
  settotalamount(cart.reduce((acc,curr)=>acc+curr.price,0));
},[cart]);

  return (
<div className="relative">
  {
    cart.length>0 ? (
      <div className=" flex flex-row my-11 ">
        <div>
          {
            cart.map((item,index)=>{
              return <CartItem key={item.id} item={item} itemindex={index}/>
            })
          }
        </div >
        <div className=" fixed top-32 right-80">
        <div>
          <div className=" text-green-700 font-bold text-lg">Your cart</div>
          <div className=" text-green-700 font-bold text-4xl">SUMMARY</div>
         <p className=" font-semibold text-gray-700 my-6">
         <span >total item:{cart.length}</span></p> 

        </div>
        <div className=" my-96">
          <p className=" font-semibold text-gray-700 mb-4">Total Amount:<span className=" font-extrabold text-black"> ${totalamount}</span></p>
          <button className=" bg-green-700 h-12 text-white font-extrabold w-80 rounded-md ">checkout now</button>
        </div>
        </div>
       
        
      </div>
    ):(
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className=" text-gray-700 text-lg font-medium ">Your Cart is Empty !</h1>
        <NavLink to={"/"}>
          <button className=" rounded-md bg-green-600 text-white  h-10 w-32">shop now</button>
        </NavLink>
      </div>
    )
  }
</div>
  )
};

export default Cart;
