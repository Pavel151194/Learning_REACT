import * as React from "react"
import { memo } from "react"
import iconSearch from "../../../assets/iconSearch.svg"
import "./index.css"
  
export const SearcFeild = memo( () => (
    <label className = "search_feild">
        <img className = "search_icon" src = {iconSearch} alt = "film_poster"></img>
        <input type = "search" placeholder = "Search"/>
    </label>
) )