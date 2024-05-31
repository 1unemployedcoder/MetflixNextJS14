import { getSearchedFilm } from "@/API/FetchService";
import FilmsPage from "@/components/film/FilmsPage/FilmsPage";

export default async function Page({ searchParams }: any) {
    const sort = searchParams.sort || 'RATING';
    const type = searchParams.type || 'ALL';
    const keyword = searchParams.search || '';

    const { items } = await getSearchedFilm({ order: sort, type, keyword });

    return <FilmsPage films={items} sort={sort} type={type} />;
}
