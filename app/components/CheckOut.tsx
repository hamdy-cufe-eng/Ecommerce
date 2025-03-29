import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [success, setSuccess] = useState(false);

  if (!product) {
    return <h2 className="text-white text-center">No product selected for checkout.</h2>;
  }

  const handlePurchase = () => {
    setSuccess(true);
    setTimeout(() => navigate("/"), 2000); // Redirects to home after 2 seconds
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <div className="mt-4">
        <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded" />
        <h2 className="text-2xl mt-2">{product.name}</h2>
        <p className="text-green-400 text-xl font-bold">${product.price}</p>
      </div>

      {success ? (
        <p className="mt-6 text-green-400 text-center text-xl">✅ Purchase Successful! Redirecting...</p>
      ) : (
        <button
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded text-lg"
          onClick={handlePurchase}
        >
          Confirm Purchase
        </button>
      )}
    </div>
  );
};

export default CheckoutPage;
