import Link from 'next/link';
import * as React from 'react';
import type { HTMLAttributes } from 'react';
import { FaHashtag } from 'react-icons/fa';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

function Heading(props: HeadingProps) {
  let { id, level = 1, children } = props;

  let Component = React.createElement(
    `h${level}`,
    {
      id,
    },
    children
  );

  if (level > 1) {
    return (
      <div className="relative -ml-4 pl-4 group mb-4 mt-4  dark:text-white  text-gray-600 text-2xl hover:underline font-bold">
        <Link id={id} href={`#${id}`}>
          {Component}
        </Link>

        <Link
          href={`#${id}`}
          aria-label="anchor"
          className="
            absolute
            top-1
            -ml-10

            flex
            items-center
            justify-center

            w-6
            h-6

            text-slate-400

            ring-1
            ring-slate-900/5

            bg-white
            rounded-md

            outline-none

            opacity-0
            group-hover:opacity-100

            focus:ring-2
            focus:ring-blue-100

            hover:ring-slate-900/10
            hover:shadow
            hover:text-slate-700

            dark:text-white
            dark:bg-gray-600/10
            dark:focus:ring-blue-600/50
          "
        >
          <FaHashtag width={12} height={12} />
        </Link>
      </div>
    );
  }

  return Component;
}

export default Heading;
