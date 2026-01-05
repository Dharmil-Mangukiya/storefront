import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const products = [
  {
    id: 1,
    name: "Laptop Pro",
    price: 85000,
    description: "High-performance laptop for professionals",
  },
  {
    id: 2,
    name: "Smartphone X",
    price: 42000,
    description: "Latest smartphone with premium features",
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <p className="text-white">Product not found</p>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-xl mx-auto bg-gray-900 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-400 mb-4">{product.description}</p>
        <p className="text-xl mb-6">₹{product.price}</p>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
