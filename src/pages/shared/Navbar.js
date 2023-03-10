import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="navbar bg-base-500 mb-20">
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
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/services">Services</Link>
                        </li>
                        <li>
                        <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                        <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <FontAwesomeIcon size="5x" icon={faCameraRetro} />
                <Link className="btn btn-ghost normal-case text-5xl mr-10">Golpo</Link>
            </div>

            <div className="navbar-center hidden lg:flex ml-96">
                <ul className="menu menu-horizontal p-0 text-xl">
                    <li className="mx-2">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="mx-2">
                    <Link to="/">About</Link>
                    </li>
                    <li className="mx-2">
                    <Link to="/services">Services</Link>
                    </li>
                    <li className="mx-2">
                    <Link to="/blogs">Blogs</Link>
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
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                        <Link to="myreviews">My Reviews</Link>
                                        </li>
                                        <li>
                                        <Link to="addservice">Add Service</Link>
                                        </li>
                                        <li>
                                        <Link onClick={handleLogOut} to="/login" className="mr-2">Logout</Link>
                                        </li>
                            </ul>
                        </div>
                    </>
                        :
                                
                    <>
                        <ul className="menu menu-horizontal p-0 text-xl">
                            <li>
                            <Link to="/login" className="btn mr-2">Login</Link>
                            </li>
                            <li>
                            <Link to="/register" className="btn">Sign Up</Link>
                            </li>
                        </ul>
                    </>
                }

            </div>
        </div>
    );
};

export default Navbar;
