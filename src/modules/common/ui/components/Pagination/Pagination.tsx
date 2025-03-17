'use client';

import { Pagination as MuiPagination } from '@mui/material';
import { ChangeEvent, useState } from 'react';

export type PaginationProps = {
  pageCount: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ pageCount, onPageChange }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = async (_event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);

    onPageChange(page);
  };

  return <MuiPagination count={pageCount} page={currentPage} onChange={handleChange} />;
}
