import * as React from "react"
import { memo } from "react"
import { IFilm, } from "../../../types"
import { CardTitle } from "../../atoms/CardTitle"
import { FilmTrailer } from "../../atoms/FilmTrailer"
import { FilmDescription } from "../../atoms/FilmDescription"
import "./index.css"

export const TrailerCard = memo( ({ title, trailer, description }: IFilm) => (
        <div className = "trailer_card">
            <CardTitle title = {"Trailer: " + title}/>
            <FilmTrailer src = {trailer}/>
            <FilmDescription description = {description}/>
        </div>
    )
)