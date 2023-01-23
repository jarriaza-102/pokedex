import { TabBarItem } from '../../types/TabBar';
import { TabBarWrapper, TabWrapper } from './TabBar.styles';

export type TabBarProps = {
  onTabChange: (index: number) => void;
  tabs: Array<TabBarItem>;
  active: number;
};

export function TabBar({ active, tabs, onTabChange }: TabBarProps) {
  return (
    <TabBarWrapper>
      {tabs.map((tab, index) => (
        <TabWrapper key={`tab-${index}`} onClick={() => onTabChange(index)} $active={active === index}>
          <div>{tab.title}</div>
        </TabWrapper>
      ))}
    </TabBarWrapper>
  );
}
