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

    const { items } = await getSearchedFilm({ order: sort, type, keyword });

    return <FilmsPage films={items} sort={sort} type={type} />;
}
