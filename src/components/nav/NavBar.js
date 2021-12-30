import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"


export const NavBar =() => {
   
        return (
            <nav className="navbar-dark bg-transparent text-green flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Overview </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/bills/*">Bill List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/bills/create/*">Add Bill </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="">Logout</Link>
                    </li>
                    
                </ul>
                {/* <span className="navbar-text">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>
                </span> */}
            </nav>
        )
    }


export default NavBar

