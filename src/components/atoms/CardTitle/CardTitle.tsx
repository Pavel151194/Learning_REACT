import * as React from "react"
import { memo } from "react"
import "./CardTitle.css"

interface ICardTitle {
    pretitle?: string
    title?: string
    subTitle?: string
}

export const CardTitle = memo( ({ pretitle, title, subTitle }: ICardTitle) => (
    <h3 className = "card_title">{pretitle}{title}{subTitle}</h3>
) )