import * as React from "react"
import { memo } from "react"
import { PageTitle } from "../../atoms/PageTitle"
import { SearchFeild } from "../../atoms/SearchFeild"
import "./Header.css"

interface IHeader {
    title: string
    searchFieldValue: string
    onChangeSearchField: (text: string) => void
    onClickFilterButton: () => void
}

export const Header  = memo( ({ title, searchFieldValue, onChangeSearchField, onClickFilterButton }: IHeader) => (
    <div className = "header">
        <PageTitle title = {title}/>
        <SearchFeild 
            searchFieldValue = {searchFieldValue}
            onChangeSearchField = {onChangeSearchField}
            onClickFilterButton = {onClickFilterButton}
        />
    </div>
) )