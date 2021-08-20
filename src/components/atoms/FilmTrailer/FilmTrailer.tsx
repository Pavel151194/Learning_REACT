import * as React from "react"
import { memo } from "react"
import { ITrailer } from "../../../types"
import "./FilmTrailer.css"

export const FilmTrailer = memo( ({ trailer }: ITrailer) => (
    <iframe 
        className = "film_trailer" 
        src = {trailer}
        title = "YouTube video player"
        allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
) )