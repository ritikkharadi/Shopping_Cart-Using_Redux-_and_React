import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import{add,remove} from "../redux/Slices/cartSlice"

const Product = ({item}) => {
  const{cart}=useSelector((state)=>state);
  const dispatch=useDispatch();

  const addtocart=()=>{
    dispatch(add(item));
    toast.success("item added successfully");

  }
  const removefromcart=()=>{
    dispatch(remove(item));
    toast.error("item removed successfully");
    
  }
return(
  <div>
    <div>
    <p class="truncate max-w-[300px] text-base font-semibold">{item.title}</p>

    </div>
    <div>
    <p className="  text-gray-400 text-wrap text-sm">{item.description.slice(0, 90)}...</p>
    </div>
    <div className="h-48 w-40 my-4">
  <img src={item.image} className="h-full " alt="Item" />
</div>

    <div className=" flex flex-row justify-between h-20 my-8">
    <div >
      <p className=" text-green-500  font-bold">${item.price}</p>
    </div>

   <div>
   {
        cart.some((p)=>p.id==item.id)?(
          <button className=" text-sm w-28 border-2 border-gray-400 rounded-full" onClick={removefromcart}>Remove Item</button>
        ):(
          <button  className=" text-sm  w-28 border-2 border-gray-400 rounded-full" onClick={addtocart}>Add To Cart</button>
        )
      }
   </div>
     
    </div>
    
   
  </div>
)
};

export default Product;
