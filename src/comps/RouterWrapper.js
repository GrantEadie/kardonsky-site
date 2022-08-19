import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import About from "./about/About";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import ListingPage from "./listings/FeaturedListing";
import Process from "./process/Process";
import Home from "./home/Home";
import App from "./App";
import Buyers from "./process/buyers/Buyers";
import Sellers from "./process/sellers/Sellers";
import Login from "./login/Login";
import Listing from "./listings/listing/Listing";
import { signOut } from "firebase/auth";

function RouterWrapper() {
  const [user, setUser] = useState("");
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      } else {
        console.log("SIGNED OUT");
      }
    });
  }, [user, setUser, auth]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        setUser("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<App user={user} handleLogout={handleLogout} />}
        >
          <Route index element={<Home />} />
          <Route path="/about-me" element={<About />} />s
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/listings" element={<ListingPage />}/>
            <Route path="/listings/:listingId" element={<Listing />} />
          <Route path="/the-process" element={<Process />}>
            <Route path="" index element={<Buyers />} />
            <Route path="buyers" element={<Buyers />} />
            <Route path="sellers" element={<Sellers />} />
          </Route>
          <Route
            path="/admin"
            element={
              <Login
                user={user}
                setUser={setUser}
                handleLogout={handleLogout}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default RouterWrapper;
