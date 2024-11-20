// components/Pagination.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
};

const PaginationComponent: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
    const router = useRouter();

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        router.push(`/movies?page=${page}`);
    };

    return (
        <div className="pagination">
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

export default PaginationComponent;
