import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import { CardTitle } from "../../atoms/CardTitle"
import { FilmPoster } from "../../atoms/FilmPoster"
import { FilmDescription } from "../../atoms/FilmDescription"
import { FilmRating } from "../../atoms/FilmRating"
import { FilmVotes } from "../../atoms/FilmVotes"
import { FilmPlot } from "../../atoms/FilmPlot"
import "./index.css"

export const FilmCard = memo(
    ({ title, poster, year, released, runtime, boxOffice, genre, country, production, writer, director, actors, imdbRating, imdbVotes, plot }: IFilm) => (
        <div className="film_card">
            <CardTitle title = {title}/>
            <FilmPoster src = {poster}/>
            <FilmDescription
                year = {year}
                released = {released}
                runtime = {runtime}
                boxOffice = {boxOffice}
                genre = {genre}
                country = {country}
                production = {production}
                writer = {writer}
                director= {director}
                actors = {actors}
            />
            <FilmRating rating = {imdbRating}/>
            <FilmVotes votes = {imdbVotes}/>
            <FilmPlot plot = {plot}/>
        </div>
    )
)