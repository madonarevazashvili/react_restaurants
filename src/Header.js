import React from 'react'
import "./Header.css"
import home from "./Images/home.png"
import menu from "./Images/menu.png"
import contact from "./Images/contact.png"
import shopping from "./Images/shopping-cart.png"
import about from "./Images/information.png"
import { NavLink, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from "./Context.js"
import context from 'react-bootstrap/esm/AccordionContext'
export default function Navigation() {
    let context= useContext(Context)
    return (<>
        <div className="header_container" >
            <nav>
                <NavLink to="/react_restaurants/">
                    <div className="header" style={{ width: "130px" }}>
                        <img className="header_logo" src={home} style={{ width: "30px" }} />
                        <p className="header_p">Home</p>
                    </div>
                </NavLink>
                <NavLink to="/react_restaurants/menu">
                    <div className="header" style={{ width: "130px" }}>
                        <img className="header_logo" src={menu} style={{ width: "30px" }} />
                        <p className="header_p">Menu</p>
                    </div>
                </NavLink>
                <NavLink to="/react_restaurants/contact-us">
                    <div className="header" style={{ width: "130px" }}>
                        <img className="header_logo" src={contact} style={{ width: "30px" }} />
                        <p className="header_p">Contact</p>
                    </div>
                </NavLink>
                <NavLink to="/react_restaurants/about">
                    <div className="header" style={{ width: "130px" }}>
                        <img className="header_logo" src={about} style={{ width: "30px"}} />
                        <p className="header_p">about</p>
                    </div>
                </NavLink>
                <NavLink to="/react_restaurants/cart">
                    <div className="header" style={{ width: "130px" }}>
                        <img className="header_logo" src={shopping} style={{ width: "30px", position: "relative"}} />
                        <p style={{ position: 'absolute',marginLeft:"35px",marginBottom:"60px" }}>{context.number}</p>
                        <p className="header_p">cart</p>
                    </div>
                </NavLink>
            </nav>
        </div >

        <Outlet />

    </>
    )
}
