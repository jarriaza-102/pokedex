import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TabBar, TabBarProps } from './TabBar'

describe('TabBar', () => {

  function setup(customProps: Partial<TabBarProps> = {}) {
    const props = {
      onTabChange: jest.fn(),
      tabs: [
        {
          img: 'Picture',
          title: 'Home',
        },
        {
          img: 'Picture',
          title: 'Favorite',
        }
      ],
      active: 0,
      ...customProps,
    }
    
    render(<TabBar {...props} />)
  }

  it('renders tabs', () => {
    const handleTabChange = jest.fn();

    setup({
      onTabChange: handleTabChange,
    });

    // Check if tabs are rendered
    const homeTab = screen.getByText(/home/i);
    const favoriteTab = screen.getByText(/favorite/i);

    expect(homeTab).toBeInTheDocument();
    expect(favoriteTab).toBeInTheDocument();

    // Check if homeTab triggers tab change event
    userEvent.click(homeTab);

    expect(handleTabChange).toHaveBeenNthCalledWith(1, 0);

    // Check if favoriteTab triggers tab change event
    userEvent.click(favoriteTab);

    expect(handleTabChange).toHaveBeenNthCalledWith(2, 1);
  })
})