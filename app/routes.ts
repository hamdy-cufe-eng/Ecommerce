import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Home page (index)
  route("dashboard", "routes/dashboard.tsx"), 
  route("product/:id", "components/ProductDetail.tsx"), 
  route("cart", "components/CartPage.tsx"), 
  route("checkout", "components/CheckOut.tsx"), 
  route("about", "components/About.tsx"), 
  //{ path: "product/:id", element: import("./routes/ProductDetail") }// Dashboard page
] satisfies RouteConfig;