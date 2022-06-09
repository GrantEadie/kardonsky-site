import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./about/About";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Listings from "./listings/Listings";
import Process from "./process/Process";
import Home from "./home/Home";
import App from "./App";
import Buyers from "./process/buyers/Buyers";
import Sellers from "./process/sellers/Sellers";
import MarketTrends from "./process/market-trends/MarketTrends";
import Login from "./login/Login"

function RouterWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about-me" element={<About />} />s
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/the-process" element={<Process />}>
            <Route path="" index element={<Buyers />} />
            <Route path="buyers" element={<Buyers />} />
            <Route path="sellers" element={<Sellers />} />
            <Route path="market-trends" element={<MarketTrends />} />
          </Route>
          <Route path="/admin" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RouterWrapper;
