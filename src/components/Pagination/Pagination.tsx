import { PaginationItem, PaginationWrapper } from './Pagination.styles';

const arrayRange = (start: number, stop: number, step: number = 1) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (_, index) => start + index * step
  );

export type PaginationProps = {
  totalItems: number;
  rowsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  currentPage,
  totalItems,
  rowsPerPage,
  onPageChange,
}: PaginationProps) {
  const pagesCount = Math.floor(totalItems / rowsPerPage);

  const firstPageToShow = currentPage - 3 > 0 ? currentPage - 3 : 0;
  const lastPageToShow =
    firstPageToShow + 9 > pagesCount ? pagesCount : firstPageToShow + 9;
  const pages = arrayRange(firstPageToShow, lastPageToShow);

  return (
    <PaginationWrapper>
      {Array.from(pages).map((val) => (
        <PaginationItem $active={val === currentPage} key={val} onClick={() => onPageChange(val)}>
          {val + 1}
        </PaginationItem>
      ))}
    </PaginationWrapper>
  );
}
