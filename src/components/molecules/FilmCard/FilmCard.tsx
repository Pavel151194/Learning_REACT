import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import { CardTitle } from "../../atoms/CardTitle"
import { FilmPoster } from "../../atoms/FilmPoster"
import { FilmDescriptionList } from "../../atoms/FilmDescriptionList"
import { FilmRating } from "../../atoms/FilmRating"
import { FilmVotes } from "../../atoms/FilmVotes"
import { FilmPlot } from "../../atoms/FilmPlot"
import "./index.css"

interface IFilmCard {
    film: IFilm
}

export const FilmCard = memo( ({ film }: IFilmCard) => (
    <div className = "film_card">
        <CardTitle key = {film.id} {...film}/>
        <FilmPoster key = {film.id} {...film}/>
        <FilmDescriptionList key = {film.id} {...film}/>
        <FilmRating key = {film.id} {...film}/>
        <FilmVotes key = {film.id} {...film}/>
        <FilmPlot key = {film.id} {...film}/>
    </div>
) )