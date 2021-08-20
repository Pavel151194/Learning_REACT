import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import "./index.css"

export const FilmDescriptionList = memo(
    ({ year, released, runtime, boxOffice, genre, country, production, writer, director, actors }: IFilm) => (
        <ul className = "film_description_list">
            <li>Year</li><li>{year}</li>
            <li>Released</li><li>{released}</li>
            <li>Runtime</li><li>{runtime}</li>
            <li>BoxOffice</li><li>{boxOffice}</li>
            <li>Genres</li><li>{genre.join(', ')}</li>
            <li>Country</li><li>{country}</li>
            <li>Production</li><li>{production}</li>
            <li>Writers</li><li>{writer}</li>
            <li>Director</li><li>{director}</li>
            <li>Actors</li><li>{actors.join(', ')}</li>
        </ul>
    )
)