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
import EditListing from "./admin/edit-listing/EditListing.js";
import NewListing from "./admin/new-listing/NewListing";
import { signOut } from "firebase/auth";
import BlogDetail from "./blog/blog-detail/BlogDetail";
import NewBlog from "./admin/new-blog/NewBlog";
import EditBlog from "./admin/edit-blog/EditBlog";
import NewTestimonial from "./admin/new-testimonial/NewTestimonial";

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
          <Route path="/blog/:blogId" element={<BlogDetail />} />
          <Route path="/blog/edit/:blogId" element={<EditBlog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/listings" element={<ListingPage />} />
          <Route path="/listings/:listingId" element={<Listing />} />
          <Route path="/listings/edit/:listingId" element={<EditListing />} />
          <Route path="/the-process" element={<Process />}>
            <Route path="" index element={<Buyers />} />
            <Route path="buyers" element={<Buyers />} />
            <Route path="sellers" element={<Sellers />} />
          </Route>
          <Route path="/new-testimonial" element={<NewTestimonial />} />
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
          {user && (
            <>
              <Route path="/new-listing" element={<NewListing />} />
              <Route path="/new-blog" element={<NewBlog />} />
            </>
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default RouterWrapper;
