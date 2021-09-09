import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import { PaginationButton } from "../../atoms/PaginationButton"
import "./Pagination.css"

interface IPagination{
    numberOfPages: number
}

export const Pagination  = memo( ({ numberOfPages }: IPagination) => (
    <PaginationButton numberOfButtons = {numberOfPages}/>
) )