import * as React from "react"
import { memo } from "react"
import "./UserRating.css"

export const UserRating = memo( () => (
    <div className = "user_rating">
        <input id = "star_10" type="radio" name="" value="10"/>
        <label htmlFor = "star_10">★</label>
        <input id = "star_9" type="radio" name="" value="9"/>
        <label htmlFor = "star_9">★</label>
        <input id = "star_8" type="radio" name="" value="8"/>
        <label htmlFor = "star_8">★</label>
        <input id = "star_7" type="radio" name="" value="7"/>
        <label htmlFor = "star_7">★</label>
        <input id = "star_6" type="radio" name="" value="6"/>
        <label htmlFor = "star_6">★</label>
        <input id = "star_5" type="radio" name="" value="5"/>
        <label htmlFor = "star_5">★</label>
        <input id = "star_4" type="radio" name="" value="4"/>
        <label htmlFor = "star_4">★</label>
        <input id = "star_3" type="radio" name="" value="3"/>
        <label htmlFor = "star_3">★</label>
        <input id = "star_2" type="radio" name="" value="2"/>
        <label htmlFor = "star_2">★</label>
        <input id = "star_1" type="radio" name="" value="1"/>
        <label htmlFor = "star_1">★</label>
        <input type = "button" value="Add rating"/>
    </div>
) )