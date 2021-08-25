import * as React from "react"
import { memo } from "react"
import "./CardButton.css"

interface ICardButton {
    title: string
}

export const CardButton = memo( ({ title }: ICardButton) => (
    <button className = "card_button">{title}</button>
) )