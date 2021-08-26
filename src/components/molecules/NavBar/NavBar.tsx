import * as React from "react"
import { memo } from "react"
import { NavLinks } from "../../atoms/NavLinks"
import { NavSlider } from "../../atoms/NavSlider"
import "./NavBar.css"

export const NavBar  = memo( () => (
    <div className = "nav_bar">
        <NavLinks/>
        <NavSlider/>
    </div>
) )