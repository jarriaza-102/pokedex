const arrayRange = (start: number, stop: number, step: number = 1) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
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

  const firstPageToShow = currentPage - 3 > 0 ? currentPage - 3 : 0
  const lastPageToShow = firstPageToShow + 9 > pagesCount ? pagesCount : firstPageToShow + 9
  const pages = arrayRange(firstPageToShow, lastPageToShow)

  return (
    <>
    {Array.from(pages).map(val => (
      <div key={val} onClick={() => onPageChange(val)}>
        {val + 1}
      </div>
    ))}
    </>
  )
}
