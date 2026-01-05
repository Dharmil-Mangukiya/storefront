import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartCount = useSelector(state => state.cart.items.length);

  return (
    <nav className="bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold tracking-wide">
          Storefront
        </h1>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>

          <Link to="/cart" className="relative hover:text-gray-400">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
