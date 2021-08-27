import * as React from "react"
import { memo } from "react"
import { IconSearch, IconFilter } from "../../../assets/icons"
import "./SearchFeild.css"
  
interface ISearchFeild{
    searchFeildValue: string
    onChangeSearchField: (text: string) => void
    onClickSearchButton: () => void
    onClickFilterButton: () => void
}

export const SearchFeild = memo( ({ searchFeildValue, onChangeSearchField, onClickSearchButton, onClickFilterButton }: ISearchFeild) => (
    <div className = "search">
        <label className = "search_feild">
            <input 
                type = "search"
                placeholder = "Search"
                value = {searchFeildValue}
                onChange = {event => onChangeSearchField(event.target.value)}
            />
            <button className = "search_button" onClick = {onClickSearchButton}>
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