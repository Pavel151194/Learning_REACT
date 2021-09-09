import * as React from "react"
import { memo } from "react"
import { NavLinks } from "../../atoms/NavLinks"
import { NavSlider } from "../../atoms/NavSlider"
import "./NavBar.css"

export const NavBar  = memo( () => (
    <nav className = "nav_bar">
        <NavLinks/>
        <NavSlider/>
    </nav>
) )