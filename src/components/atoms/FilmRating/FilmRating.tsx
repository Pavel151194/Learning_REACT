import * as React from "react"
import { memo } from "react"
import "./index.css"

interface IFilmRating {
    rating: number
}

export const FilmRating = memo( ({ rating }: IFilmRating) => {
    return (
        <ul className = "film_rating">
            <li>Rating</li>
            <li>{rating}</li>
        </ul>
    )
})