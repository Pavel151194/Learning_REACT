import * as React from "react"
import { memo } from "react"
import "./FiltersByCountries.css"

interface IFiltersByCountries {
    countries: string[]
}

export const FiltersByCountries = memo( ({ countries }: IFiltersByCountries) => (
    <div className = "filters">
        <label className = "by_countries">
            <h5>Search in title and plot</h5>
            <select>
                {countries.map( (country) => (<option>{country}</option>) )}
            </select>
        </label>
    </div>
) )