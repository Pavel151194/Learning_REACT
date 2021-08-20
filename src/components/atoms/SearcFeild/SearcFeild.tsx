import * as React from "react"
import { memo } from "react"
import iconSearch from "../../../assets/iconSearch.svg"
import iconFiltres from "../../../assets/iconFiltres.svg"
import "./SearcFeild.css"
  
export const SearcFeild = memo( () => (
    <div className = "search">
        <label className = "search_feild">
            <img className = "search_icon" src = {iconSearch} alt = "search_icon"></img>
            <input type = "search" placeholder = "Search"/>
        </label>
        <button className = "filter_button">
            <img className = "filter_icon" src = {iconFiltres} alt = "filter_icon"></img>
        </button>
    </div>
) )