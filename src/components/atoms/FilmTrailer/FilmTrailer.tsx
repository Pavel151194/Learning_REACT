import * as React from "react"
import { memo } from "react"
import "./FilmTrailer.css"

interface IFilmTrailer {
    trailer: string
}

export const FilmTrailer = memo( ({ trailer }: IFilmTrailer) => (
    <iframe 
        className = "film_trailer" 
        src = {trailer}
        title = "YouTube video player"
        allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
) )