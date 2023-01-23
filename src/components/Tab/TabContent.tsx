import { PropsWithChildren } from 'react';

export type TabContentProps = PropsWithChildren & {
  value: number;
  index: number;
};

export function TabContent({ value, index, children }: TabContentProps) {
  return (
    <div
      style={{
        display: value !== index ? 'none' : 'block',
      }}
    >
      {children}
    </div>
  );
}
