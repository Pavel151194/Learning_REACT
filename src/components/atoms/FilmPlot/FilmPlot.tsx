import * as React from "react"
import { memo } from "react"
import "./index.css"

interface IFilmPlot {
    plot: string
}

export const FilmPlot = memo( ({ plot }: IFilmPlot) => {
    return (
        <p className = "film_plot">{plot}</p>
    )
})