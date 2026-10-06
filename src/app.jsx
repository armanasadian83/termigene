import "./Css files/home.css";
import {Route, Routes, BrowserRouter, useLocation} from "react-router-dom";
import Home from "./Pages/home";
import Footer from "./Components/Footer";
import Service from "./Pages/service";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
      </Routes>

      {/* Pass the current route to the footer */}
      <Footer path={location.pathname} />
    </>

  );
}
 
export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}