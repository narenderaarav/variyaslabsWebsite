import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  useEffect(() => {
    const openNavMenu = document.querySelector(".open-nav-menu"),
      closeNavMenu = document.querySelector(".close-nav-menu"),
      navMenu = document.querySelector(".nav-menu"),
      menuOverlay = document.querySelector(".menu-overlay"),
      mediaSize = 991;

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);

    function toggleNav() {
      navMenu.classList.toggle("open");
      menuOverlay.classList.toggle("active");
      document.body.classList.toggle("hidden-scrolling");
    }

    navMenu.addEventListener("click", (event) => {
      if (
        event.target.hasAttribute("data-toggle") &&
        window.innerWidth <= mediaSize
      ) {
        // prevent default anchor click behavior
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if (menuItemHasChildren.classList.contains("active")) {
          collapseSubMenu();
        } else {
          // collapse existing expanded menuItemHasChildren
          if (navMenu.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
    });
    function collapseSubMenu() {
      navMenu
        .querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
      navMenu
        .querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }
    function resizeFix() {
      // if navMenu is open ,close it
      if (navMenu.classList.contains("open")) {
        toggleNav();
      }
      // if menuItemHasChildren is expanded , collapse it
      if (navMenu.querySelector(".menu-item-has-children.active")) {
        collapseSubMenu();
      }
    }

    window.addEventListener("resize", function () {
      if (this.innerWidth > mediaSize) {
        resizeFix();
      }
    });
  });

  return (
    <div className="container">
      <div className="header-main">
        <div className="logo">
          <NavLink to="/">
            <img src="../images/logo.jpg" alt="logo" />
          </NavLink>
        </div>
        <div className="open-nav-menu">
          <span></span>
        </div>
        <div className="menu-overlay"></div>
        {/* navigation menu start */}
        <nav className="nav-menu">
          <div className="close-nav-menu">
            <img src="../images/close.svg" alt="close" />
          </div>
          <ul className="menu">
            <li className="menu-item menu-item-has-children">
              <NavLink to="/" data-toggle="sub-menu">
                Home
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/about">About</NavLink>
            </li>

            <li className="menu-item menu-item-has-children">
              <NavLink to="/services" data-toggle="sub-menu">
                Services <i className="plus"></i>
              </NavLink>
              <ul className="sub-menu">
                <li className="menu-item">
                  <NavLink to="/web-development">Web Development</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/mobile-app-development">
                    Mobile App Development
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/devops">Devops</NavLink>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <NavLink to="/technologies">Technologies</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        {/* navigation menu end */}
      </div>
    </div>
  );
};

export default Navigation;
