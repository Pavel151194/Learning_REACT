import * as React from "react"
import { memo } from "react"
import "./FilmRating.css"

interface IFilmRating {
    imdbRating: number
}

export const FilmRating = memo( ({ imdbRating }: IFilmRating) => (
    <ul className = "film_rating">
        <li>Rating</li>
        <li>{imdbRating}</li>
    </ul>
) )