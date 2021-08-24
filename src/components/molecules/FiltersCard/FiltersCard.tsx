import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import { CardTitle } from "../../atoms/CardTitle"
import { SortButtons } from "../../atoms/SortButtons"
import { FiltersByTitleAndPlot } from "../../atoms/FiltersByTitleAndPlot"
import { FiltersByCountries } from "../../atoms/FiltersByCountries"
import "./FiltersCard.css"

interface IFiltersCard {
    title: string
    title2: string
    films: IFilm[]
}

export const FiltersCard = memo( ({ title, title2, films }: IFiltersCard) => {
    return <div className = "filters_card">
        <CardTitle title = {title}/>
        <SortButtons/>
        <CardTitle title2 = {title2}/>
        <FiltersByTitleAndPlot/>
        <FiltersByCountries countries = {Array.from( new Set( films.map( ({ country }) => (country.split(', ')) ).flat() ) )}/>
    </div>
} )