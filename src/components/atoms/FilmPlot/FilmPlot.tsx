import * as React from "react"
import { memo } from "react"
import "./FilmPlot.css"

interface IPlot {
    plot: string
}

export const FilmPlot = memo( ({ plot }: IPlot) => (
    <p className = "film_plot">{plot}</p>
) )