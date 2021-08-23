import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import "./FilmCard.css"

export const FilmCard = memo( ({ poster, title, year, plot }: IFilm) => (
    <div className = "film_card_list">
        <img className = "film_card_poster" src = {poster} alt = "film_card_poster"></img>
        <h4>{title}</h4>
        <p className = "film_card_year">{year}</p>
        <p className = "film_card_plot">{plot}</p>
    </div>
) )