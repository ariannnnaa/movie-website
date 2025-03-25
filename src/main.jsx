import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppProvider } from "./context/useSearchContext.jsx";
import { register } from "swiper/element";
import { BrowserRouter } from "react-router-dom";

register();

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <BrowserRouter>
      <App />                            
    </BrowserRouter>
    </AppProvider>  
);
