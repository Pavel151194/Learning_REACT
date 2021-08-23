import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import { FilmCard } from "../../atoms/FilmCard"
import "./FilmList.css"

interface IFilmList {
    films: IFilm[]
}

export const FilmList = memo( ({ films }: IFilmList) => (
    <div className = "film_list">
        {films?.map( (film) => (
            <FilmCard key = {film.id} {...film}/>
        ) )}
    </div>
) )