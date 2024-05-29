import {
    TypeFilm,
    TypeFilms,
    TypeNews,
    TypeReview,
    typeFetchedFilms,
    typeFetchedNews,
} from "@/@types/AsyncTypes";

export async function getNews() {
    const res = await fetch(
        "https://kinopoiskapiunofficial.tech/api/v1/media_posts",
        {
            method: "GET",
            headers: {
                "X-API-KEY": "11f800ba-3534-408a-a1d1-2c2125702ea8",
                "Content-Type": "application/json",
            },
            next: { revalidate: 3600 },
        }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = (await res.json()) as typeFetchedNews;
    return data.items as TypeNews[];
}
export async function getFilms() {
    const res = await fetch(
        "https://kinopoiskapiunofficial.tech/api/v2.2/films",
        {
            method: "GET",
            headers: {
                "X-API-KEY": "11f800ba-3534-408a-a1d1-2c2125702ea8",
                "Content-Type": "application/json",
            },
            next: { revalidate: 3600 },
        }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = (await res.json()) as typeFetchedFilms;
    return data.items as TypeFilms[];
}

export const getFilm = async (id: number) => {
    const res = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
        {
            method: "GET",
            headers: {
                "X-API-KEY": "11f800ba-3534-408a-a1d1-2c2125702ea8",
                "Content-Type": "application/json",
            },
        }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const film = await res.json();
    return film as TypeFilm;
};

export const getReviews = async (id: number) => {
    const res = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/reviews`,
        {
            method: "GET",
            headers: {
                "X-API-KEY": "11f800ba-3534-408a-a1d1-2c2125702ea8",
                "Content-Type": "application/json",
            },
            next: { revalidate: 3600 }
        }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const review = await res.json();
    const { items } = review
    return items as TypeReview[];
};

export const getSearchedFilm = async (title: string) => {
    const res = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=${title}&page=1`,
        {
            method: "GET",
            headers: {
                "X-API-KEY": "11f800ba-3534-408a-a1d1-2c2125702ea8",
                "Content-Type": "application/json",
            },
        }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const film = await res.json();
    return film;
};