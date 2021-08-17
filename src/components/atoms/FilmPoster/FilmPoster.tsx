import * as React from "react"
import { memo } from "react"
import "./index.css"

interface IFilmPoster {
    src: string
}

export const FilmPoster = memo( ({ src }: IFilmPoster) => {
    return (
        <img className = "film_poster" src = {src} alt = "film_poster"></img>
    )
})