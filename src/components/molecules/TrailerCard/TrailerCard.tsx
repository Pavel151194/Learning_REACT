import * as React from "react"
import { memo } from "react"
import { IFilm, ITrailer } from "../../../types"
import { CardTitle } from "../../atoms/CardTitle"
import { FilmTrailer } from "../../atoms/FilmTrailer"
import { FilmDescription } from "../../atoms/FilmDescription"
import "./TrailerCard.css"

interface ITrailerCard {
    pretitle: string
    film: IFilm
    trailer: ITrailer
}

export const TrailerCard = memo( ({ pretitle, film, trailer }: ITrailerCard) => (
    <div className = "trailer_card">
        <CardTitle 
            pretitle = {pretitle}
            title = {film.title}
        />
        <FilmTrailer trailer = {trailer.trailer}/>
        <FilmDescription description = {trailer.description}/>
    </div>
) )