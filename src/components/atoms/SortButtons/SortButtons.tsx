import * as React from "react"
import { memo } from "react"
import "./SortButtons.css"

export const SortButtons = memo( () => (
    <div className = "sort_buttons">
        <label>
            <input className = "sort_buttons_inputs" type = "checkbox" value = "Rating"/>
            <span>Rating</span>
        </label>
        <label>
            <input className = "sort_buttons_inputs" type = "checkbox" value = "Year"/>
            <span>Year</span>
        </label>
    </div>
) )