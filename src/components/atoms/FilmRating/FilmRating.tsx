import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import "./FilmRating.css"

export const FilmRating = memo( ({ imdbRating }: IFilm) => (
    <ul className = "film_rating">
        <li>Rating</li>
        <li>{imdbRating}</li>
    </ul>
) )