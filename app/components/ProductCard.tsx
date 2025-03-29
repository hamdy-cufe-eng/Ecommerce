type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  type ProductProps = {
    product: Product;
  };
  const ProductCard: React.FC<ProductProps> = ({ product }) => {
    return (
      <div className="flex flex-col border p-4 rounded-lg shadow-md hover:shadow-lg transition-all w-[300px] max-w-full">
        {/* Image Container - Ensures Images Resize Properly */}
        <div className="w-full aspect-[4/3] overflow-hidden rounded-md">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
  
        {/* Product Info */}
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-green-600 text-lg font-bold">${product.price}</p>
  
        {/* Add to Cart Button */}
        <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-600 transition">
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;