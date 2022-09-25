import { useState, useEffect, useCallback } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { slide as Menu } from "react-burger-menu";
import "./nav-mobile.css";
import { NavLink, useLocation } from "react-router-dom";

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  let location = useLocation();
  const { pathname } = location;

  const checkColor = () => {
    if (pathname.includes("/about-me") || pathname.includes("/blog") || pathname.includes("/listings")) {
      return "var(--black)"
    }
    return "var(--white)"
  };

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div id="mobile-nav">
      <div id="header-logo">
        <NavLink to="/" style={{ color: checkColor() }}>
          vk
        </NavLink>
      </div>
      <div
        id="burger"
        style={{ top: visible ? "0" : "-100px", transition: "top 1s ease" }}
      >
        <Hamburger
          color={isOpen ? "var(--white)" : checkColor()}
          toggled={isOpen}
          toggle={() => setOpen(!isOpen)}
          size={100}
        />
      </div>

      <Menu
        customBurgerIcon={<div></div>}
        isOpen={isOpen}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <NavLink to="/about-me">about</NavLink>

        <NavLink to="/the-process">the process</NavLink>

        <NavLink to="/blog">blog</NavLink>

        <NavLink to="/listings">listings</NavLink>

        <NavLink to="/contact">contact</NavLink>
      </Menu>
    </div>
  );
};

export default MobileNav;
