import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    setError("");

    try {
      const { data } = await axios.post(
        "http://localhost:5000/create-payment-intent",
        { amount: totalAmount * 100 }
      );

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setError(result.error.message);
        setLoading(false);
      } else if (result.paymentIntent.status === "succeeded") {
        navigate("/success");
      }
    } catch (err) {
      setError("Payment failed. Try again.");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 border rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">
        Total: ₹{totalAmount}
      </h2>

      <div className="p-3 border rounded mb-4">
        <CardElement />
      </div>

      {error && (
        <p className="text-red-600 mb-3">{error}</p>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}

export default function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
