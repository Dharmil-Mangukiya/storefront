import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-900 rounded-xl p-5 shadow-lg hover:shadow-2xl transition duration-300">
      
      {/* Product Image */}
      <div className="h-40 bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-gray-500">
        Image
      </div>

      {/* Product Name */}
      <Link to={`/product/${product.id}`}>
        <h3 className="text-lg font-semibold mb-1 hover:text-blue-400 transition">
          {product.name}
        </h3>
      </Link>

      {/* Price */}
      <p className="text-gray-400 mb-4">
        ₹{product.price.toLocaleString()}
      </p>

      {/* Add to Cart */}
      <button
        onClick={() => dispatch(addToCart(product))}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
