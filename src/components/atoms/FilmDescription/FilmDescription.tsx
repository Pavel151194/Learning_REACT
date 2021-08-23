import * as React from "react"
import { memo } from "react"
import "./FilmDescription.css"

interface IFilmDescription {
        description: string
}

export const FilmDescription = memo( ({ description }: IFilmDescription) => (
        <p className = "film_description">{description}</p>
) )