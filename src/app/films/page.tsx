import { getSearchedFilm } from "@/API/FetchService";
import FilmsPage from "@/components/film/FilmsPage/FilmsPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Metflix | Films',
    description: 'Metflix films and news',
}

export default async function Page({ searchParams }: any) {
    const sort = searchParams.sort || 'RATING';
    const type = searchParams.type || 'ALL';
    const keyword = searchParams.search || '';
    const currentPage = Number(searchParams.page) || 1

    const { items, totalPages } = await getSearchedFilm({ order: sort, type, keyword, page: currentPage });

    return <FilmsPage totalPages={totalPages} films={items} />
}
