
import { createContext, useState, useContext } from "react";

const LoadingContext = createContext({
  loading: true,
  setLoading: (loading: boolean) => {},
});

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
export const LoadingSpinner = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <svg
          className="animate-spin h-12 w-12 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3-3-3h4z"
          ></path>
        </svg>
        <p className="ml-3 text-lg">Loading...</p>
      </div>
    );
  };
  

  
export const useLoading = () => useContext(LoadingContext);