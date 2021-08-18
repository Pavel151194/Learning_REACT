import * as React from "react"
import { memo } from "react"
import { ITrailer } from "../../../types"
import "./index.css"

export const FilmDescription = memo( ({ description }: ITrailer) => {
    return (
        <p className = "film_description">{description}</p>
    )
})