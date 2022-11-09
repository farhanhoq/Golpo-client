import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <Link to="">Home</Link>
                        </li>
                        <li>
                        <Link to="">About</Link>
                        </li>
                        <li>
                        <Link to="">Services</Link>
                        </li>
                        <li>
                        <Link to="">Login</Link>
                        </li>
                        <li>
                        <Link to="">Item 3</Link>
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-5xl mr-10">Golpo</Link>
            </div>

            <div className="navbar-center hidden lg:flex ml-96">
                <ul className="menu menu-horizontal p-0 text-xl">
                    <li className="mx-2">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="mx-2">
                    <Link to="/about">About</Link>
                    </li>
                    <li className="mx-2">
                    <Link to="/services">Services</Link>
                    </li>
                    <li className="mx-2">
                    <Link to="/showcase">Showcase</Link>
                    </li>
                    <li className="mx-2">
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user?.uid ?
                    
                        <>
                            <Link to="/addservice" className="btn btn-ghost mr-2">Add Service</Link>
                            <Link onClick={handleLogOut} to="/login" className="btn mr-2">Logout</Link>
                        </>
                        :
                        <>
                            <Link to="/login" className="btn mr-2">Login</Link>
                            <Link to="/register" className="btn">Sign Up</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;
