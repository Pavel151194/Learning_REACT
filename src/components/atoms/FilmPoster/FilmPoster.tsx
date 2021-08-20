import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import "./FilmPoster.css"

export const FilmPoster = memo( ({ poster }: IFilm) => (
        <img className = "film_poster" src = {poster} alt = "film_poster"></img>
) )