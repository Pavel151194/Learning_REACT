import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import "./index.css"

export const FilmVotes = memo( ({ imdbVotes }: IFilm) => {
    return (
        <ul className = "film_votes">
            <li>voted</li>
            <li>{imdbVotes}</li>
        </ul>
    )
})