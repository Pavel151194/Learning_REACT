import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import { CardTitle } from "../../atoms/CardTitle"
import { FilmPoster } from "../../atoms/FilmPoster"
import { FilmDescriptionList } from "../../atoms/FilmDescriptionList"
import { FilmRating } from "../../atoms/FilmRating"
import { FilmVotes } from "../../atoms/FilmVotes"
import { FilmPlot } from "../../atoms/FilmPlot"
import "./FilmCard.css"

interface IFilmCard {
    film: IFilm
}

export const FilmCard = memo( ({ film }: IFilmCard) => (
    <div className = "film_card">
        <CardTitle {...film}/>
        <FilmPoster {...film}/>
        <FilmDescriptionList {...film}/>
        <FilmRating {...film}/>
        <FilmVotes {...film}/>
        <FilmPlot {...film}/>
    </div>
) )