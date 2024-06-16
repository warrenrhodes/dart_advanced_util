/* eslint-disable react/no-children-prop */
import { type ReactNode } from 'react';

import { Aside } from './components/aside';
import { Pagination } from './components/pagination';
import { TableOfContents } from './components/table-of-contents';
import { CodeEdition } from './components/code-edition/code-edition';

interface DocsLayoutProps {
  markdoc: Record<string, any> | undefined;
  children: ReactNode;
}

function DocsLayout(props: DocsLayoutProps) {
  let { markdoc, children } = props;
  return (
    <div
      className="
        relative
        px-4

        w-full
        max-w-full
        mx-auto

        lg:flex
        xl:max-w-8xl
      "
    >
      <Aside />

      <Main children={children} markdoc={markdoc} />
      <TableOfContents contents={markdoc?.content} />
    </div>
  );
}

const Main = ({
  children,
  markdoc,
}: {
  children: ReactNode;
  markdoc: Record<string, any> | undefined;
}) => {
  return (
    <main
      id="scroller"
      className="
      flex-auto
      py-12
      w-full
      max-w-4xl
      lg:px-12
    "
    >
      <header className="mb-9">
        <h1
          id="overview"
          className="
          block
          mb-2
          text-5xl
          text-slate-900
          tracking-tight
          font-bold

          dark:text-white
        "
        >
          {markdoc?.frontmatter.title}
        </h1>
        <p
          className="
          block
          mt-0
    
          text-base
          text-slate-500

          dark:text-slate-400
        "
        >
          {markdoc?.frontmatter.description}
        </p>
        <hr className="block my-12 border-gray-200 dark:border-gray-200/10" />
      </header>

      {children}
      <div className="mt-12">
        <CodeEdition />
        <Pagination />
      </div>
    </main>
  );
};

export default DocsLayout;
