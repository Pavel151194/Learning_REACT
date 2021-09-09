import * as React from "react"
import { memo } from "react"
import { IconSearch, IconFilter } from "../../../assets/icons"
import "./SearchFeild.css"
  
interface ISearchFeild{
    searchFieldValue: string
    onChangeSearchField: (text: string) => void
    onClickFilterButton: () => void
}

export const SearchFeild = memo( ({ searchFieldValue, onChangeSearchField, onClickFilterButton }: ISearchFeild) => (
    <div className = "search">
        <label className = "search_feild">
            <input 
                type = "search"
                placeholder = "Search"
                value = {searchFieldValue}
                onChange = {event => onChangeSearchField(event.target.value)}
            />
            <button className = "search_button">
                <IconSearch className = "search_icon"/>
            </button>
        </label>
        <label className = "filter_button">
            <input
                type = "checkbox"
                onClick = {onClickFilterButton}
            />
            <IconFilter className = "filter_icon"/>
        </label>
    </div>
) )