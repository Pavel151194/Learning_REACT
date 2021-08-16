import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import "./index.css"

export const FilmCard = memo(
    ({ title, poster, year, released, runtime, boxOffice, genre, country, production, writer, director, actors, imdbRating, imdbVotes, plot }: IFilm) => (
        <div className="film_card">
            <h3 className="film_title">{title}</h3>
            <img className="film_poster" src={poster} alt="film_poster"></img>
            <ul className="film_description">
                <li>Year</li>
                <li>{year}</li>
                <li>Released</li>
                <li>{released}</li>
                <li>Runtime</li>
                <li>{runtime}</li>
                <li>BoxOffice</li>
                <li>{boxOffice}</li>
                <li>Genres</li>
                <li>{genre.join(', ')}</li>
                <li>Country</li>
                <li>{country}</li>
                <li>Production</li>
                <li>{production}</li>
                <li>Writers</li>
                <li>{writer}</li>
                <li>Director</li>
                <li>{director}</li>
                <li>Actors</li>
                <li>{actors.join(', ')}</li>
            </ul>
            <ul className="film_rating">
                <li>Rating</li>
                <li>{imdbRating}</li>
            </ul>
            <ul className="film_voted">
                <li>voted</li>
                <li>{imdbVotes}</li>
            </ul>
            <p className="film_plot">{plot}</p>
        </div>
    )
)