import type { Route } from "./+types/home";
import { SideBar } from "../welcome/SideBar";
import ProductCard from "../components/ProductCard";
import FilterPanel from "../components/FilterPanel"; // Import the new filtering component
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoading  ,LoadingSpinner} from "../components/LoadingProvider";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
const imglink = "https://img.freepik.com/free-photo/black-laptop-screen-dark-room-night_169016-58499.jpg?t=st=1743204838~exp=1743208438~hmac=1bb7687beb40fa7f5067d93452efea638a369ade9a412898f02eb0772db5a5a7&w=1380";

export const products = [
  { id: 1, name: "Laptop1", image: imglink, price: 19, description: "This is a great product.sss" , category :"Laps" },
  { id: 2, name: "Laptop2", image: imglink, price: 29, description: "A must-have item for everyone." , category :"Laps"},
  { id: 3, name: "Laptop3", image: imglink, price: 39, description: "High-quality and affordable." , category :"Laps"},
  { id: 4, name: "Laptop4", image: imglink, price: 49, description: "Best-selling product of the year!" , category :"Laps"},
  { id: 5, name: "Laptop5", image: imglink, price: 59, description: "Best-selling product of the year!" , category :"Mob"},
];


const Products: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    searchQuery: "",
    category: "All",
    priceRange: Infinity,
    sortBy: "default",
  });

  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;

    products.forEach((product) => {
      const img = new Image();
      img.src = product.image;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === products.length && isMounted) {
          setLoading(false);
        }
      };
    });

    return () => {
      isMounted = false;
    };
  }, []);

  // ✅ Filtering & Sorting
  const filteredProducts = products
    .filter((product) => {
      return (
        product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
        (filters.category === "All" || product.category === filters.category) &&
        product.price <= filters.priceRange
      );
    })
    .sort((a, b) => {
      if (filters.sortBy === "price-low") return a.price - b.price;
      if (filters.sortBy === "price-high") return b.price - a.price;
      if (filters.sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (filters.sortBy === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });

  if (loading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      {/* Sidebar Filters */}
      <FilterPanel onFilterChange={setFilters} sidebarWidth={250} />

      <div className="flex-1 p-5">
        <div
          className="grid gap-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            alignItems: "stretch",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 shadow-lg rounded-2xl overflow-hidden max-w-[350px] w-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Link to={`/product/${product.id}`}>
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Best Seller
                  </span>
                </div>

                {/* Product Details */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{product.description}</p>
                  <p className="mt-3 text-2xl font-bold text-green-500">${product.price}</p>
                  <button className="w-full mt-4 bg-red-700 text-white py-2 rounded-lg text-lg font-medium transition hover:bg-red-600">
                    Add to Cart 🛒
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex-1 p-6 ml-64">
    <Products />
  </div>
  );
}
