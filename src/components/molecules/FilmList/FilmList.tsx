import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import { FilmCard } from "../../atoms/FilmCard"
import "./FilmList.css"

interface IFilmList {
    onClickFilmCard: (id: number) => void
    addBookmark: (id: number) => void
    removeBookmark: (id: number) => void
    films: IFilm[]
    bookmarksId: number[]
}

export const FilmList = memo( ({ onClickFilmCard, addBookmark, removeBookmark, films, bookmarksId }: IFilmList) => (
    <ul className = "film_list">
        {films?.map( (film) => (
            <FilmCard
                onClickCard = {onClickFilmCard}
                key = {film.id} {...film}
                addMark = {addBookmark}
                removeMark = {removeBookmark}
                bookmarksId = {bookmarksId}
            />
        ) )}
    </ul>
) )