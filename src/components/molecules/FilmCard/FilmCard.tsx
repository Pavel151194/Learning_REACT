import * as React from "react"
//import { memo } from "react"
//import { IFilm } from "../../../types"
import { films } from "../../../mock"
import { CardTitle } from "../../atoms/CardTitle"
import { FilmPoster } from "../../atoms/FilmPoster"
import { FilmDescriptionList } from "../../atoms/FilmDescriptionList"
import { FilmRating } from "../../atoms/FilmRating"
import { FilmVotes } from "../../atoms/FilmVotes"
import { FilmPlot } from "../../atoms/FilmPlot"
import "./index.css"

export const FilmCard = () => {
    const selectedFilm = films[1]
    console.log(selectedFilm)
    return (
        <div className = "film_card">
            <CardTitle {...selectedFilm}/>
            <FilmPoster {...selectedFilm}/>
            <FilmDescriptionList {...selectedFilm}/>
            <FilmRating {...selectedFilm}/>
            <FilmVotes {...selectedFilm}/>
            <FilmPlot {...selectedFilm}/>
        </div>
   )
}
