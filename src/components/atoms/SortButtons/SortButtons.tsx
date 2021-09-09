import * as React from "react"
import { memo } from "react"
import "./SortButton.css"

interface ISortButtons {
    title: string
    isActive: boolean
    onClick: (field: string) => void
    field: string
}

export const SortButtons = memo( ({ title, isActive, onClick, field }: ISortButtons) => (
    <label className = "sort_button">
        <input
            className = "sort_button_inputs"
            type = "checkbox" 
            value = {title}
            onClick = {() => onClick(field)}
        />
        <span>{title}</span>
    </label>
) )