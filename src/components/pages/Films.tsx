import React, { useState, useEffect } from 'react'
import { films, trailers, defaultSortSettings } from "../../mock"
import { NavBar } from '../molecules/NavBar'
import { HeaderHome } from '../molecules/HeaderHome'
import { FilmList } from '../molecules/FilmList'
import { RatingCard } from '../molecules/RatingCard'
import { FiltersCard } from '../molecules/FiltersCard'

export const Films = () => {
    const [filteredFilms, setFilteredFilms] = useState(films)
    const [searchValue, setSearchValue] = useState("")
    const [isFiltersCardActive, setFiltersCardState] = useState(false)
    const [sortSettings, setSortSettings] = useState(defaultSortSettings)
    const [selectedFilm, setSelectedFilm] = useState(films[0] as any)
    const [bookmarksId, setBookmarksId] = useState<number[]>([])

    useEffect( () => {
        setFilteredFilms( films.filter( ({ title }) => title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ) )
    }, [searchValue])

    useEffect( () => {
        const savedBookmarks = localStorage.getItem("bookmarks")
        if(savedBookmarks){
        setBookmarksId(JSON.parse(savedBookmarks))
        }
        return () => {}
    }, [])

    const getSearchValue = (text: string) => setSearchValue(text)
    const toggleFiltersCard = () => setFiltersCardState(isFiltersCardActive === false)
    const selectFilm = (id: number) => setSelectedFilm(films.find( ({id: filmId}) => id === filmId) )
    const toggleSorting = (field: string) => setFilteredFilms([...films].sort((a: any, b: any) => a[field] -  b[field]))
    
    const addBookmark = (id: number) => {
        const hasId = bookmarksId.find((currentId) => currentId === id)
        if(hasId) return
        const newBookmarksId = [...bookmarksId, id]
        setBookmarksId(newBookmarksId)
        localStorage.setItem("bookmarks", JSON.stringify(newBookmarksId))
    }
    const removeBookmark = (id: number) => {
        const filteredBookmarks = bookmarksId.filter((currentId) => currentId !== id)
        setBookmarksId(filteredBookmarks)
        localStorage.setItem("bookmarks", JSON.stringify(filteredBookmarks))
    }

    return (
        <div className="wrapper">
            <nav>
                <NavBar/>
            </nav>
            <main>
                <HeaderHome
                    title = {"Movies"}
                    searchFieldValue = {searchValue}
                    onChangeSearchField = {getSearchValue}
                    onClickFilterButton = {toggleFiltersCard}
                />
                {isFiltersCardActive ? (
                <FiltersCard
                    title = {"Sort by:"}
                    subTitle = {"Filter:"}
                    countries = {Array.from(new Set(films.map( ({ country }) => (country.split(', ')) ).flat()))}
                    buttonName = {"Show results"}
                    sortSettings = {defaultSortSettings}
                    onClickSortButton = {toggleSorting}
                />
                ) : null}

                <RatingCard
                    title = {"Add rating"}
                    buttonName = {"Add rating"}
                />
            </main>
        </div>
    )
}