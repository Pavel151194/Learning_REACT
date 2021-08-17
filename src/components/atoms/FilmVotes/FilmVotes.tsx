import * as React from "react"
import { memo } from "react"
import "./index.css"

interface IFilmVotes {
    votes: number
}

export const FilmVotes = memo( ({ votes }: IFilmVotes) => {
    return (
        <ul className = "film_votes">
            <li>voted</li>
            <li>{votes}</li>
        </ul>
    )
})