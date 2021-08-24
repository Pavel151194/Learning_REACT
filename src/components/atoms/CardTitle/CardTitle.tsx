import * as React from "react"
import { memo } from "react"
import "./CardTitle.css"

interface ICardTitle {
    pretitle?: string
    title?: string
    title2?: string
}

export const CardTitle = memo( ({ pretitle, title, title2 }: ICardTitle) => (
    <h3 className = "card_title">{pretitle}{title}{title2}</h3>
) )