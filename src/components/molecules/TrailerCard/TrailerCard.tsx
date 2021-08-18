import * as React from "react"
//import { memo } from "react"
//import { IFilm } from "../../../types"
import { films, trailers } from "../../../mock"
import { CardTitle } from "../../atoms/CardTitle"
import { FilmTrailer } from "../../atoms/FilmTrailer"
import { FilmDescription } from "../../atoms/FilmDescription"
import "./index.css"

export const TrailerCard = () => {
    const selectedFilm = films[1]
    const selectedTrailer = trailers[0]
    return (
        <div className = "trailer_card">
            <CardTitle {...selectedFilm}/>
            <FilmTrailer {...selectedTrailer}/>
            <FilmDescription {...selectedTrailer}/>
        </div>
    )    
}