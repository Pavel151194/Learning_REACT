import * as React from "react"
import { memo } from "react"
import "./index.css"

interface IFilmDescription {
    description: string
}

export const FilmDescription = memo( ({ description }: IFilmDescription) => {
    return (
        <p className = "film_description">{description}</p>
    )
})