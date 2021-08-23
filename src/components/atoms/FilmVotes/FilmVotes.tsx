import * as React from "react"
import { memo } from "react"
import "./FilmVotes.css"

interface IFilmVotes {
    imdbVotes: number
}

export const FilmVotes = memo( ({ imdbVotes }: IFilmVotes) => (
    <ul className = "film_votes">
        <li>voted</li>
        <li>{imdbVotes}</li>
    </ul>
) )