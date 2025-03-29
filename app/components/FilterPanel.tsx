import { useState } from "react";

interface FilterPanelProps {
  onFilterChange: (filters: { searchQuery: string; category: string; priceRange: number; sortBy: string }) => void;
  sidebarWidth: number;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange, sidebarWidth }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(100);
  const [sortBy, setSortBy] = useState("default");

  const handleFilterChange = (field: string, value: string | number) => {
    const updatedFilters = { searchQuery, category: selectedCategory, priceRange, sortBy, [field]: value };
    onFilterChange(updatedFilters);
  };

  return (
    <div
      className="fixed top-0 bg-gray-900 text-white p-4 flex flex-wrap gap-4 items-center shadow-md z-50 w-full"
      style={{ left: sidebarWidth, width: `calc(100% - ${sidebarWidth}px)` }}
    >
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border border-gray-700 bg-gray-800 text-white rounded w-full md:w-1/4"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          handleFilterChange("searchQuery", e.target.value);
        }}
      />

      {/* 📂 Category Dropdown */}
      <select
        className="p-2 border border-gray-700 bg-gray-800 text-white rounded w-full md:w-1/6"
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          handleFilterChange("category", e.target.value);
        }}
      >
        <option value="All">All Categories</option>
        <option value="Phones">Phones</option>
        <option value="Laptops">Laptops</option>
        <option value="Accessories">Accessories</option>
      </select>

      {/* 💰 Price Range Slider */}
      <div className="flex flex-col w-full md:w-1/4">
        <span className="text-sm">Max Price: ${priceRange}</span>
        <input
          type="range"
          min="0"
          max="1500"
          value={priceRange}
          onChange={(e) => {
            setPriceRange(Number(e.target.value));
            handleFilterChange("priceRange", Number(e.target.value));
          }}
          className="cursor-pointer"
        />
      </div>

      {/* 🔀 Sorting Dropdown */}
      <select
        className="p-2 border border-gray-700 bg-gray-800 text-white rounded w-full md:w-1/6"
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value);
          handleFilterChange("sortBy", e.target.value);
        }}
      >
        <option value="default">Sort By</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="name-asc">Name: A-Z</option>
        <option value="name-desc">Name: Z-A</option>
      </select>
    </div>
  );
};

export default FilterPanel;
