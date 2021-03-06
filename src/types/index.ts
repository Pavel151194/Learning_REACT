export interface IFilm {
    id: number
    title: string
    year: number
    released: string
    runtime: string
    genre: string[]
    director: string
    writer: string
    actors: string[]
    plot: string
    country: string
    poster: string
    imdbRating: number
    imdbVotes: number
    type: string
    boxOffice: string
    production: string
}

export interface ITrailer {
    trailer: string
    description: string
}
export interface ISortSettings {
    title: string
    field: string
    isActive: boolean
}