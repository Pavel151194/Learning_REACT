import * as React from "react"
import { memo } from "react"
import { PageTitle } from "../../atoms/PageTitle"
import { SearchFeild } from "../../atoms/SearchFeild"
import "./Header.css"

interface IHeader {
    title: string
    searchFeildValue: string
    onChangeSearchField: (text: string) => void
    onClickSearchButton: () => void
    onClickFilterButton: () => void
}

export const Header  = memo( ({ title, searchFeildValue, onChangeSearchField, onClickSearchButton, onClickFilterButton }: IHeader) => (
    <div className = "header">
        <PageTitle title = {title}/>
        <SearchFeild 
            searchFeildValue = {searchFeildValue}
            onChangeSearchField = {onChangeSearchField}
            onClickSearchButton = {onClickSearchButton}
            onClickFilterButton = {onClickFilterButton}
        />
    </div>
) )