import React from 'react';
import type { ReactNode, ReactElement } from 'react';

import { GiSmallFire } from 'react-icons/gi';

export interface CalloutProps {
  /**
   * Semantic appearance
   */
  appearance?: 'caution' | 'danger' | 'info' | 'note' | 'tip';

  /**
   * Optional title
   */
  title?: string;

  /**
   *
   */
  children: ReactNode;

  disableTitle: boolean;
}

const APPEARANCES = {
  caution: {
    title: 'caution',
    icon: <GiSmallFire />,
    className:
      'text-yellow-700 bg-yellow-50 dark:text-yellow-400 dark:bg-yellow-600/10',
  },
  danger: {
    title: 'danger',
    icon: <GiSmallFire />,
    className: 'text-red-700 bg-red-50 dark:text-red-400 dark:bg-red-600/10',
  },
  info: {
    title: 'info',
    icon: <GiSmallFire />,
    className:
      'text-blue-700 bg-blue-50 dark:text-blue-400 dark:bg-blue-600/10',
  },
  tip: {
    title: 'tip',
    icon: <GiSmallFire />,
    className:
      'text-green-700 bg-green-50 dark:text-green-400 dark:bg-green-600/10',
  },
  note: {
    title: 'note',
    icon: <GiSmallFire />,
    className:
      'text-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-600/10',
  },
};

function Callout(props: CalloutProps) {
  let { appearance = 'note', disableTitle, title, children, ...rest } = props;

  let element = APPEARANCES[appearance];

  return (
    <div
      className={`
        p-4
        m-5
        pr-4
        border
        border-l-4
        border-l-current

        dark:border-t-0
        dark:border-b-0
        dark:border-r-0

        rounded-md
        text-sm

        not-prose

        ${'[&>div>p>a]:underline' /*ugly but works*/}
        ${element.className}
      `}
      {...rest}
    >
      <div
        className="
          flex
          flex-col
        "
      >
        {!disableTitle && (
          <div
            className="
            flex
            items-center

            uppercase
            font-bold
          "
          >
            {element.icon}
            {title ?? element.title}
          </div>
        )}
        {React.Children.toArray(children).map((child, index) =>
          React.cloneElement(child as ReactElement, {
            key: index,
            className:
              'whitespace-pre-line mt-1 text-slate-700 dark:text-slate-300',
          })
        )}
      </div>
    </div>
  );
}

export default Callout;
