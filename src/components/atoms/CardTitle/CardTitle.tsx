import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import "./index.css"

export const CardTitle = memo( ({ title }: IFilm) => (
    <h3 className = "card_title">{title}</h3>
) )