import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import { FilmCard } from "../../atoms/Film_card";
import "./index.css";

interface IFilmList {
    films: IFilm[];
}

export const FilmList = memo( ({ films }: IFilmList) => {
    return (
        <div>
            {films?.map((film) => (
                <FilmCard key={film.id} {...film}/>
            ))}
        </div>
    )
})