import { useState } from 'react';
import { PokemonList } from '../PokemonList/PokemonList';
import { TabBar } from '../Tab/TabBar';
import { TabContent } from '../Tab/TabContent';
import { Wrapper } from './App.styles';

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
    setActiveTab(index)
  }

  return (
    <Wrapper>
      <div>
        <TabContent value={activeTab} index={0}>
          <PokemonList />
        </TabContent>

        <TabContent value={activeTab} index={1}>
          Favorite
        </TabContent>
      </div>
      <div>
        <TabBar tabs={tabItems} onTabChange={handleTabChange} />
      </div>
    </Wrapper>
  );
}
