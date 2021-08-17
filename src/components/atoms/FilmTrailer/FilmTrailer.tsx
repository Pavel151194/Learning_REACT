import * as React from "react"
import { memo } from "react"
import "./index.css"

interface IFilmTrailer {
    src: string
}

export const FilmTrailer = memo( ({ src }: IFilmTrailer) => {
    return (
        <iframe className = "film_trailer" src = {src}></iframe>
    )
})