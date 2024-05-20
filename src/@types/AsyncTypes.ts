export interface typeFetchedNews {
    total: number
    totalPages: number
    items: TypeNews[]
}

export interface TypeNews {
    kinopoiskId: number
    imageUrl: string
    title: string
    description: string
    url: string
    publishedAt: Date
}

export interface typeFetchedFilms {
    total: number
    totalPages: number
    items: TypeFilms[]
}

export interface TypeFilms {
    kinopoiskId: number
    imdbId: string
    nameRu: string
    nameOriginal: string
    ratingImdb: number
    year: number
    posterUrlPreview: string
}