import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import{add,remove} from "../redux/Slices/cartSlice"


const CartItem = ({item,itemindex}) => {
const dispatch=useDispatch();
const removefromcart=()=>{
  dispatch(remove(item.id));
  toast.success("item removed");

}
  return(
    <div className=" mx-80 p-3 ">
      <div className=" flex flex-raw " >
        
        <div className="h-48 w-40 my-2 ">
          <img src={item.image} className="h-full w-full object-cover" alt="Item" />
            </div>

      
        <div className=" mx-4 my-3">
        <div>
          <h1 className=" truncate max-w-[300px] text-base font-semibold">{item.title}</h1>
        </div>
        <div >
        <p className="max-w-[300px] text-wrap text-sm text-gray-400 my-5">
                {item.description.slice(0, 60)}...
</p>
        </div>
        <div className=" flex flex-raw justify-between my-8">
        <div >
      <p className=" text-green-500  font-bold">${item.price}</p>
    </div>
        <div onClick={removefromcart}>
        <MdDelete className=" h-10 w-5" />
        </div>
        </div>
        </div>
        
       
      </div>
    </div>
  )
};

export default CartItem;
