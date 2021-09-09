import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { IFilm } from "../../types"
import { films, trailers } from "../../mock"
import { PageTitle } from '../atoms/PageTitle'
import { NavBar } from '../molecules/NavBar'
import { HeaderFilm } from '../molecules/HeaderFilm'
import { FilmCard } from '../molecules/FilmCard'
import { TrailerCard } from '../molecules/TrailerCard'

export const Film = () => {
    const selectedTrailer = trailers[0]

    const [selectedFilm, setSelectedFilm] = useState<IFilm | null>(null)
    const params = useParams() as any

    useEffect( () => {
        if(params?.id){
            const foundFilm = films.find( ({ id: filmId }) => filmId === Number(params?.id) )
            if(foundFilm){
                setSelectedFilm(foundFilm)
                return
            }
            setSelectedFilm(null)
        }
        return () => {}
    }, [params?.id])

    return (
        <div className = "page">
            <NavBar/>
            <HeaderFilm title = {"Movie"}/>
            {selectedFilm ? (
            <section className = "film">
                <FilmCard film = {selectedFilm}/>
                <TrailerCard
                    pretitle = {"Trailer: "}
                    film = {selectedFilm} 
                    trailer = {selectedTrailer}
                />
            </section>
            ) : <PageTitle title = {"No film"}/>}
        </div>
    )
}