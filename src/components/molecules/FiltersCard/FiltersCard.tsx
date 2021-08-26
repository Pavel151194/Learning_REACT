import * as React from "react"
import { memo } from "react"
import { IFilm } from "../../../types"
import { CardTitle } from "../../atoms/CardTitle"
import { SortButtons } from "../../atoms/SortButtons"
import { Filters } from "../../atoms/Filters"
import { CardButton } from "../../atoms/CardButton"
import "./FiltersCard.css"

interface IFiltersCard {
    title: string
    title2: string
    films: IFilm[]
    buttonName: string
}

export const FiltersCard = memo( ({ title, title2, films, buttonName }: IFiltersCard) => (
    <div className = "filters_card">
        <CardTitle title = {title}/>
        <SortButtons/>
        <CardTitle title2 = {title2}/>
        <Filters
            countries = {Array.from( new Set( films.map( ({ country }) => (country.split(', ')) ).flat() ) )}
        />
        <CardButton title = {buttonName}/>
    </div>
) )
//countries = { films.reduce( (acc, { country }) => Array.from( new Set( ([...acc, ...country.split(', ')]) )), [] ) }