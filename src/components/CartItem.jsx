import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty
} from "../features/cart/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-gray-900 p-4 rounded mb-3">
      <div>
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-gray-400">
          ₹{item.price * item.qty}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(decrementQty(item.id))}
          className="px-2 bg-gray-700 rounded"
        >
          -
        </button>

        <span>{item.qty}</span>

        <button
          onClick={() => dispatch(incrementQty(item.id))}
          className="px-2 bg-gray-700 rounded"
        >
          +
        </button>

        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-red-500 ml-3"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
