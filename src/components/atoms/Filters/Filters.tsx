import * as React from "react"
import { memo } from "react"
import "./Filters.css"

interface IFilters {
    countries: string[]
}

export const Filters = memo( ({ countries }: IFilters) => (
    <div className = "filters">
        <label className = "by_title_plot">
            <h5>Search in title and plot</h5>
            <input type = "text"></input>
        </label>
        <label className = "by_countries">
            <h5>Countries</h5>
            <select>
                {countries.map( (country) => (<option>{country}</option>) )}
            </select>
        </label>
        <label className = "by_year">
            <h5>Years</h5>
            <p>From</p><input type = "number"></input>
            <p>To</p><input type = "number"></input>
        </label>
        <label className = "by_rating">
            <h5>Rating</h5>
            <p>From</p><input type = "number"></input>
            <p>To</p><input type = "number"></input>
        </label>
        <label className = "by_genres">
            <h5>Genres</h5>
            <div className = "selected_genres"></div>
        </label>
    </div>
) )