import { cn } from '@/lib/utils';
import { TabPanels as TabPanelsBase } from '@headlessui/react';
import type { ReactNode } from 'react';

export interface TabPanelsProps {
  children: ReactNode;
}

function TabPanels(props: TabPanelsProps) {
  let { children, ...rest } = props;

  return (
    <TabPanelsBase
      className={cn('rounded-b-md bg-gray-100')}
      {...rest}
      key="TabPanels"
    >
      {children}
    </TabPanelsBase>
  );
}

export default TabPanels;
