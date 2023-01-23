import { useState } from 'react';
import { FavoriteProvider } from '../../context/Favorite/useFavorite';
import { FavoritePokemons } from '../FavoritePokemons/FavoritePokemons';
import { PokemonList } from '../PokemonList/PokemonList';
import { TabBar } from '../Tab/TabBar';
import { TabContent } from '../Tab/TabContent';
import { Header, LogoWrapper, Wrapper } from './App.styles';
import logo from '../../assets/logo.png';

const tabItems = [
  {
    title: 'Home',
    img: 'home',
  },
  {
    title: 'Favorite',
    img: 'loved',
  },
];

export function App() {
  const [activeTab, setActiveTab] = useState(0);

  function handleTabChange(index: number) {
    setActiveTab(index);
  }

  return (
    <Wrapper>
      <Header>
        <LogoWrapper>
          <img src={logo} className='App-logo' alt='logo' />
        </LogoWrapper>
      </Header>
      <FavoriteProvider>
        <TabContent value={activeTab} index={0}>
          <PokemonList />
        </TabContent>

        <TabContent value={activeTab} index={1}>
          <FavoritePokemons />
        </TabContent>
      </FavoriteProvider>
      <div>
        <TabBar active={activeTab} tabs={tabItems} onTabChange={handleTabChange} />
      </div>
    </Wrapper>
  );
}
