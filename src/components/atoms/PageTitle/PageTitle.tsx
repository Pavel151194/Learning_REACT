import * as React from "react"
import { memo } from "react"
import "./PageTitle.css"

interface ITitle {
    title: string
}
  
export const PageTitle = memo( ({ title }: ITitle) => (
    <h2 className="title">{title}</h2>
))