import * as React from "react"
import { memo } from "react"
import { Link} from "react-router-dom"
import { IconCircle } from "../../../assets/icons"
import "./FilmCard.css"

interface IFilmCard {
    addMark: (id: number) => void
    removeMark: (id: number) => void
    id: number
    poster: string
    title: string
    year: number
    plot: string
    bookmarksId: number[]
}

export const FilmCard = memo( ({ addMark, removeMark, id, poster, title, year, plot, bookmarksId }: IFilmCard) => (
    <li>
        <Link className = "film_card_list" to={"films/" + id.toString()}>
            <img className = "film_card_poster" src = {poster} alt = "film_card_poster"></img>
            <h4>{title}</h4>
            <p className = "film_card_year">{year}</p>
            <p className = "film_card_plot">{plot}</p>
        </Link>
        {bookmarksId.find(bookmarkId => bookmarkId === id) ? (
            <button className = "film_card_button" onClick = {() => removeMark(id)}>Remove from favorites</button>
            ) : (
            <button className = "film_card_button" onClick = {() => addMark(id)}>Add to favorites</button>
        )}
        <p className = "film_card_slider_name">Already viewed?</p>
        <label className = "switch">
            <input type = "checkbox"/>
            <span className = "slider">
                <IconCircle className = {"film_card_slider_icon"}/>
            </span>
        </label>
    </li>
) )