"use client"
import {useMemo} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import cl from "./Pagination.module.css"
type Props = {
    totalPages: number
    currentPage: number
}
const Pagination: React.FC<Props> = ({totalPages, currentPage}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const totalPagesArray = useMemo(() => {
        return Array.from({length: totalPages}, (_, index) => (index + 1))
    }, [totalPages])
    const changePage = (page: number) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('page', page.toString());
        router.push(`/films?${newParams.toString()}`);
    }
    return (
        <div className={cl.container}>
            {totalPagesArray.map(page =>
                <div className={cl.container_page} key={page}>
                    <span className={page === currentPage ? cl.currentPage : cl.page} onClick={() => changePage(page)}>{page}</span>
                </div>
            )}
        </div>
    );
};

export default Pagination;
