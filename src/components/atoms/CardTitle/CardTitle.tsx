import * as React from "react"
import { memo } from "react"
import "./CardTitle.css"

interface ICardTitle {
    pretitle?: string
    title: string
}

export const CardTitle = memo( ({ pretitle, title }: ICardTitle) => (
    <h3 className = "card_title">{pretitle}{title}</h3>
) )