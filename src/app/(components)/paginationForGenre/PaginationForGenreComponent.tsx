// components/Pagination.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    genreId : string
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, genreId }) => {
    const router = useRouter();

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        router.push(`/genres/${genreId}?page=${page}`);
    };

    return (
        <div className="pagination-container">
            <button
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
            >
                Prev
            </button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <button
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
