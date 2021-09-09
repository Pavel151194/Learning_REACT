import * as React from "react"
import { memo } from "react"
import { IconCircle } from "../../../assets/icons"
import "./FilmSlider.css"

export const FilmSlider = memo( () => (
    <label className = "switch">
        <input type = "checkbox"/>
        <span className = "slider">
            <IconCircle className = {"film_slider_icon"}/>
        </span>
    </label>
) )