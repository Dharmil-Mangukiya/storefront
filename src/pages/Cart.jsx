import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

export default function Cart() {
  const items = useSelector(state => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Your cart is empty 🛒</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-xl mx-auto">

        <h2 className="text-2xl font-bold mb-6">
          Your Cart
        </h2>

        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}

        <div className="mt-6 border-t border-gray-700 pt-4">
          <h3 className="text-lg font-semibold">
            Total: ₹{total.toLocaleString()}
          </h3>

          <Link to="/checkout">
            <button className="mt-4 w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg">
              Proceed to Checkout
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
