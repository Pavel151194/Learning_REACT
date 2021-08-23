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
        <CardTitle title = {film.title}/>
        <FilmPoster poster = {film.poster}/>
        <FilmDescriptionList 
            year = {film.year}
            released = {film.released}
            runtime = {film.runtime}
            boxOffice = {film.boxOffice}
            genre = {film.genre}
            country = {film.country}
            production = {film.production}
            writer = {film.writer}
            director = {film.director}
            actors =  {film.actors}
        />
        <FilmRating imdbRating = {film.imdbRating}/>
        <FilmVotes imdbVotes = {film.imdbVotes}/>
        <FilmPlot plot = {film.plot}/>
    </div>
) )