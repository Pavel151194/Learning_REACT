import React, { useState, useEffect } from 'react'
import { memo } from "react"
import { PageTitle } from "../../atoms/PageTitle"
import { SearchFeild } from "../../atoms/SearchFeild"
import "./HeaderHome.css"

interface IHeaderHome {
    title: string
    searchFieldValue: string
    onChangeSearchField: (text: string) => void
    onClickFilterButton: () => void
}

export const HeaderHome  = memo( ({ title, searchFieldValue, onChangeSearchField, onClickFilterButton }: IHeaderHome) => (
    <header className = "header">
        <PageTitle title = {title}/>
        <SearchFeild 
            searchFieldValue = {searchFieldValue}
            onChangeSearchField = {onChangeSearchField}
            onClickFilterButton = {onClickFilterButton}
        />
    </header>
) )