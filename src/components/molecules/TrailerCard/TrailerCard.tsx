import * as React from "react"
import { memo } from "react"
import { IFilm, ITrailer } from "../../../types"
import { CardTitle } from "../../atoms/CardTitle"
import { FilmTrailer } from "../../atoms/FilmTrailer"
import { FilmDescription } from "../../atoms/FilmDescription"
import "./index.css"

interface ITrailerCard {
    film: IFilm
    trailer: ITrailer
}

export const TrailerCard = memo( ({ film, trailer }: ITrailerCard) => (
    <div className = "trailer_card">
        <CardTitle {...film}/>
        <FilmTrailer {...trailer}/>
        <FilmDescription {...trailer}/>
    </div>
) )