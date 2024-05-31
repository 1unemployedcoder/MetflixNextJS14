"use client"
import React, {Suspense, useMemo} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import cl from "./Pagination.module.css"
import Loading from "@/app/loading";
type Props = {
    totalPages: number
}
const Pagination: React.FC<Props> = ({totalPages}) => {
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page') || 1)
    const router = useRouter();
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

export const PaginationBar: React.FC<Props> = ({totalPages}: any) => {
    return (
        <Suspense fallback={<Loading />}>
            <Pagination totalPages={totalPages} />
        </Suspense>
    )
}
