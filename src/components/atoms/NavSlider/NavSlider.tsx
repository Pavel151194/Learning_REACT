import * as React from "react"
import { memo } from "react"
import { IconMoon } from "../../../assets/icons"
import "./NavSlider.css"

export const NavSlider = memo( () => (
    <label className = "switch">
        <input type = "checkbox"/>
        <span className = "slider">
            <IconMoon className = {"slider_icon"}/>
        </span>
    </label>
) )