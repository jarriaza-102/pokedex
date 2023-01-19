import { TabBarItem } from '../../types/TabBar';
import { TabBarWrapper, TabWrapper } from './TabBar.styles';

export type TabBarProps = {
  onTabChange: (index: number) => void;
  tabs: Array<TabBarItem>;
};

export function TabBar({ tabs, onTabChange }: TabBarProps) {
  return (
    <TabBarWrapper>
      {tabs.map((tab, index) => (
        <TabWrapper key={`tab-${index}`} onClick={() => onTabChange(index)}>
          <div>{tab.img}</div>
          <div>{tab.title}</div>
        </TabWrapper>
      ))}
    </TabBarWrapper>
  );
}
