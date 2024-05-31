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

export interface TypeFilm extends TypeFilms {
    slogan: string
    shortDescription: string
}

export interface TypeReview {
    kinopoiskId: number
    type: typeView
    date: Date
    positiveRating: number
    negativeRating: number
    author: string
    title: string
    description: string
}

export interface SearchType {
    order?: string
    type?: string
    keyword?: string
}
