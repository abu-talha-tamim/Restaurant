import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User logged out"))
      .catch((error) => console.log(error));
  };

  const linkItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/secrent">Secret</Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="btn">
            <FaShoppingCart className="mr-2"></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
      {user && (
        <button onClick={handleLogOut} className="btn btn-ghost">
          Logout
        </button>
      )}
    </>
  );

  return (
    <div className="navbar fixed top-0 left-0 w-full bg-opacity-30 bg-black text-white shadow-md z-50 px-4">
      {/* Left Section */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-lg shadow-lg z-10 mt-2 w-48 p-2"
          >
            {linkItems}
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-semibold flex items-center space-x-2"
        >
          <span>Bistro</span>
          <span className="text-blue-600 font-bold underline">Boss</span>
          <img
            className="w-11 h-11 rounded-lg object-cover"
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>

      {/* Center Menu (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4 text-lg">{linkItems}</ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end">
        {!user && (
          <Link to="/login" className="btn btn-info px-4 py-2">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
