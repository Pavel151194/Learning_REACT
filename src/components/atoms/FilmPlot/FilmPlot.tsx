import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import "./index.css"

export const FilmPlot = memo( ({ plot }: IFilm) => {
    return (
        <p className = "film_plot">{plot}</p>
    )
})