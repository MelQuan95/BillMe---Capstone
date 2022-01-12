import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"
import NavImage from "./Distro.png"

export const NavBar = () => {

    return (
        <nav className="navbar-dark bg-transparent text-green flex-md-nowrap p-0">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Overview </Link>
                </li>

                {Home()}

                <li className="nav-item">
                    <Link className="nav-link" to="">Logout</Link>
                </li>
            </ul>
        </nav>
    )
}

function Home() {
    return (
      <div>
        <img className="billmelogo" src={NavImage} alt="Billme logo"/>
      </div>
    );
  }
export default NavBar

