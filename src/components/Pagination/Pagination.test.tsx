import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('works correctly', () => {
    const handlePageChange = jest.fn();
    const props = {
      totalItems: 55,
      rowsPerPage: 20,
      currentPage: 0,
      onPageChange: handlePageChange,
    };

    render(<Pagination {...props} />);

    // Check if page 1 is displayed
    expect(screen.getByText(1)).toBeInTheDocument();
    // Check if page 2 is displayed
    expect(screen.getByText(2)).toBeInTheDocument();
    // Check if page 3 is displayed
    const page3 = screen.getByText(3);

    expect(page3).toBeInTheDocument();

    // Check if page 3 is not displayed (it shouldn't exist)
    expect(screen.queryByText(4)).not.toBeInTheDocument();

    // Click on page 3
    userEvent.click(page3);

    // Page index is page - 1
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });
});
