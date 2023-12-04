import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
//   console.log(cartItems);
const dispatch= useDispatch();
 const handelClear=()=>{
    dispatch(clearCart());
 }
  return (
    <div className="h-screen">
      <h1 className="font-bold text-3xl m-2 p-2">cart - {cartItems.length}</h1>
      <button className="bg-green-400 m-2 p-2" onClick={()=> handelClear()}>Clear Cart</button>
    <div className='flex flex-wrap'>  {cartItems.map((item) => (
        <CartCard key={item.id} {...item} />
      ))}</div>
    </div>
  );
};
export default Cart;
