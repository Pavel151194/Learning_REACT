import * as React from "react"
import { memo } from "react"
import {  } from "../../../assets/icons"
import "./PaginationButton.css"

interface IPaginationButton{
    numberOfButtons: number
}

export const PaginationButton = memo( ({ numberOfButtons }: IPaginationButton) => (
    <button>1</button>
) )