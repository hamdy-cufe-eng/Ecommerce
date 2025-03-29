import { useCart } from "./CartContext";
const CartPage: React.FC = () => {
    const { cart, removeFromCart } = useCart();
  
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
  
        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="flex items-center justify-between border-b border-gray-600 py-4">
                <div className="flex items-center gap-4">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-green-400">${product.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default CartPage;