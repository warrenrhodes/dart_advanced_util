import { TabList as TabListBase } from '@headlessui/react';
import type { ReactNode } from 'react';

export interface TabListProps {
  children: ReactNode;
}

function TabList(props: TabListProps) {
  let { children, ...rest } = props;

  return (
    <TabListBase
      className="p-2 bg-gray-50 dark:bg-gray-500/10 rounded-t-md"
      key="TabList"
      {...rest}
    >
      {children}
    </TabListBase>
  );
}

export default TabList;
