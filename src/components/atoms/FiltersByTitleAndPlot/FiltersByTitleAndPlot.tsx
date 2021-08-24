import * as React from "react"
import { memo } from "react"
import "./FiltersByTitleAndPlot.css"

export const FiltersByTitleAndPlot = memo( () => (
    <label className = "filters_by_title_and_plot">
        <h5>Search in title and plot</h5>
        <input type = "text"></input>
    </label>
) )