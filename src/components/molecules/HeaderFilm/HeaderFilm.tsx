import * as React from "react"
import { memo } from "react"
import { PageTitle } from "../../atoms/PageTitle"

interface IHeaderFilm {
    title: string
}

export const HeaderFilm  = memo( ({ title }: IHeaderFilm) => (
    <header className = "header">
        <PageTitle title = {title}/>
    </header>
) )