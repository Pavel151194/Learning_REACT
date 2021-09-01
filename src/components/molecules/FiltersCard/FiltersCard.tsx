import * as React from "react"
import { memo } from "react"
import { ISortSettings } from "../../../types"
import { CardTitle } from "../../atoms/CardTitle"
import { SortButtons } from "../../atoms/SortButtons"
import { Filters } from "../../atoms/Filters"
import { CardButton } from "../../atoms/CardButton"
import "./FiltersCard.css"

interface IFiltersCard {
    title: string
    subTitle: string
    countries: string[]
    buttonName: string
    sortSettings: ISortSettings[]
    onClickSortButton: (field: string) => void
}

export const FiltersCard = memo( ({ title, subTitle, countries, buttonName, sortSettings, onClickSortButton }: IFiltersCard) => (
    <div className = "filters_card">
        <CardTitle title = {title}/>
        <div className = "sort_buttons">
            {sortSettings?.map( (setting) => (
                <SortButtons {...setting}
                    onClick = {onClickSortButton}
                />
            ) )}
        </div>
        <CardTitle subTitle = {subTitle}/>
        <Filters
            countries = {countries}
        />
        <CardButton title = {buttonName}/>
    </div>
) )