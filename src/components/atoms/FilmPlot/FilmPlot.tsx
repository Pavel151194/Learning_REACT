import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import "./FilmPlot.css"

export const FilmPlot = memo( ({ plot }: IFilm) => (
    <p className = "film_plot">{plot}</p>
) )