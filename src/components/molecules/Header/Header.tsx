import * as React from "react"
import { memo } from "react"
import { PageTitle } from "../../atoms/PageTitle"
import { SearcFeild } from "../../atoms/SearcFeild"
import "./index.css"

interface IHeader {
    title: string
}

export const Header  = memo( (title: IHeader) => (
    <div className = "header">
        <PageTitle {...title}/>
        <SearcFeild/>
    </div>
) )