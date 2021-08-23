import * as React from "react"
import { memo } from "react"
import "./FilmPoster.css"

interface IPoster {
        poster: string
}

export const FilmPoster = memo( ({ poster }: IPoster) => (
        <img className = "film_poster" src = {poster} alt = "film_poster"></img>
) )