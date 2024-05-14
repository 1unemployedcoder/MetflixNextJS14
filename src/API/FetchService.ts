import { typeFetchedFilms, typeFetchedNews } from "@/@types/AsyncTypes"

export async function getNews() {
    const res = await fetch('https://kinopoiskapiunofficial.tech/api/v1/media_posts', {
      method: 'GET',
      headers: {
          'X-API-KEY': '11f800ba-3534-408a-a1d1-2c2125702ea8',
          'Content-Type': 'application/json',
      },
  })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json() as Promise<typeFetchedNews>
  }
export async function getFilms() {
    const res = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
      method: 'GET',
      headers: {
          'X-API-KEY': '11f800ba-3534-408a-a1d1-2c2125702ea8',
          'Content-Type': 'application/json',
      },
  })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json() as Promise<typeFetchedFilms>
  }