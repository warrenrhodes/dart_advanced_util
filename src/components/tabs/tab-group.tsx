import { TabGroup as TabGroupBase } from '@headlessui/react';
import type { ReactNode } from 'react';

export interface TabGroupProps {
  children: ReactNode;
}

function TabGroup(props: TabGroupProps) {
  let { children, ...rest } = props;

  return (
    <div className="w-full my-6">
      <TabGroupBase {...rest}>{children}</TabGroupBase>
    </div>
  );
}

export default TabGroup;
