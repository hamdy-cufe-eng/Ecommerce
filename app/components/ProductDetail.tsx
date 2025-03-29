import { useParams } from "react-router";
import { products } from "../routes/home";  
import { Link  ,useNavigate} from "react-router-dom";
import { useCart } from "./CartContext"; // Import Cart Context
import { useState ,useMemo, useEffect } from "react";
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  }
const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const { addToCart } = useCart(); // Use cart context
  const [productf, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();
  // Fetch the product every time `id` changes
  const productfx = useMemo(() => {
    return id ? products.find((p) => p.id === parseInt(id)) || null : null;
  }, [id]);
  
  if (!id) {
    return <h2 className="text-white text-center">Invalid Product ID</h2>;
  }
  
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-white text-center">Product Not Found</h2>;
  }
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-400 mt-2">{product.description}</p>
      <p className="text-green-400 font-bold text-2xl mt-4">${product.price}</p>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
        >
          Add to Cart
        </button>
       
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-md" 
                onClick={() => navigate("/checkout", { state: { product } })}
        >

          Buy Now
        </button>
      </div>

      <Link to="/" className="mt-6 inline-block bg-blue-500 px-6 py-2 rounded">
        Back to Products
      </Link>
    </div>
  );
};

export default ProductDetail;
