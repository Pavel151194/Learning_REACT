import * as React from "react"
import { memo } from "react"
import { ITrailer } from "../../../types"
import "./index.css"

export const FilmTrailer = memo( ({ trailer }: ITrailer) => {
    return (
        <iframe className = "film_trailer" src = {trailer}></iframe>
    )
})