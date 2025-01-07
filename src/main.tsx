import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./Contexts/ProductContext";
import { SidebarProvider } from "./Contexts/SidebarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </SidebarProvider>
);
