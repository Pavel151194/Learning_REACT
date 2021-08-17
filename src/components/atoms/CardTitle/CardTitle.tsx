import * as React from "react"
import { memo } from "react"
import "./index.css"

interface ICardTitle {
    title: string
}

export const CardTitle = memo( ({ title }: ICardTitle) => {
    return (
        <h3 className = "film_title">{title}</h3>
    )
})