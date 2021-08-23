import * as React from "react"
import { memo } from "react"
import { CardTitle } from "../../atoms/CardTitle"
import { UserRating } from "../../atoms/UserRating"
import "./RatingCard.css"

interface IRatingCard {
    title: string
}

export const RatingCard = memo( ({ title }: IRatingCard) => (
    <div className = "rating_card">
        <CardTitle title = {title}/>
        <UserRating/>
    </div>
) )