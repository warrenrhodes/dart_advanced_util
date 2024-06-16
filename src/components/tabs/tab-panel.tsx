import React from 'react';
import type { ReactNode } from 'react';

import { TabPanel as TabPanelBase } from '@headlessui/react';
import { cn } from '@/lib/utils';

export interface TabPanelProps {
  children: ReactNode;
}

function TabPanel(props: TabPanelProps) {
  let { children, ...rest } = props;

  return (
    <TabPanelBase
      className="bg-gray-100 dark:bg-gray-700/5 rounded-b-md text-sm focus:outline-none"
      key="TabPanel"
      {...rest}
    >
      {React.Children.map(children, (child) => {
        return (
          <div
            className={cn(
              '[&>p]:m-0 [&>div>pre]:m-0 [&>div>pre]:rounded-t-none [&>div>pre]:dark:!bg-gray-700/5 [&>div>pre]:dark:border-t-0',
              //@ts-ignore
              Boolean(child?.props.language) ? '' : 'p-4 '
            )}
          >
            {child}
          </div>
        );
      })}
    </TabPanelBase>
  );
}

export default TabPanel;
