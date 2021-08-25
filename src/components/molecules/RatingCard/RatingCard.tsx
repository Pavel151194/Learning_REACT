import * as React from "react"
import { memo } from "react"
import { CardTitle } from "../../atoms/CardTitle"
import { UserRating } from "../../atoms/UserRating"
import { CardButton } from "../../atoms/CardButton"
import "./RatingCard.css"

interface IRatingCard {
    title: string
    buttonName: string
}

export const RatingCard = memo( ({ title, buttonName }: IRatingCard) => (
    <div className = "rating_card">
        <CardTitle title = {title}/>
        <UserRating/>
        <CardButton title = {buttonName}/>
    </div>
) )