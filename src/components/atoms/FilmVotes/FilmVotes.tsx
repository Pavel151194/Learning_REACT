import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import "./FilmVotes.css"

export const FilmVotes = memo( ({ imdbVotes }: IFilm) => (
    <ul className = "film_votes">
        <li>voted</li>
        <li>{imdbVotes}</li>
    </ul>
) )