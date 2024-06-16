'use client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SIDEBAR, SidebarItem } from '../pagination/use-pagination';
import { useHeadingsObserver } from '../table-of-contents/use-headings-observer';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

function Aside() {
  let { currentId } = useHeadingsObserver();

  return (
    <aside
      id="aside"
      className="
        hidden
        z-10
        fixed
        top-[64px]
        left-0
        lg:inset-0
        w-full
        h-full
        self-end
        bg-white
        backdrop-blur
        dark:supports-backdrop-blur:bg-gray-900/70
        lg:sticky
        lg:block
        lg:w-64
        lg:h-auto
        lg:bg-transparent
        lg:dark:bg-transparent
      "
    >
      <nav
        className="
          h-[calc(100%-64px)]
          px-4
          py-8
          overflow-auto
          lg:sticky
          lg:top-20
          lg:h-screen
          lg:block
          lg:pl-0
          lg:pr-6
          lg:py-12
          dark:bg-transparent
        "
        aria-label="Categories"
      >
        <ul className="space-y-6 pl-1">
          {SIDEBAR.map((item) => (
            <AsideItem key={item.title} item={item} currentId={currentId} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

function AsideItem({
  item,
  currentId,
}: {
  item: SidebarItem;
  currentId: string;
}) {
  const [isDisclose, setIsDisclose] = useState(true);
  return (
    <li key={item.title}>
      <div className="flex justify-between">
        <h5
          className="
                  block
                  ml-3
                  mb-2
                  font-medium
                  tracking-wide
                  text-xl
                  text-slate-900
                  dark:text-white
                "
        >
          {item.title}
        </h5>
        <button onClick={() => setIsDisclose(!isDisclose)}>
          {!isDisclose ? (
            <FaChevronUp className="h-4 w-4" />
          ) : (
            <FaChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>

      {isDisclose && Boolean(item.children?.length) && (
        <ul className="space-y-1">
          {item.children?.map(({ title, id, slug }) => {
            const style = `
                     flex
                            align-middle
                            justify-between
                            py-2
                            px-5
                            text-sm
                            text-slate-500
                            dark:text-slate-400
                            dark:hover:text-blue-600
                            rounded
                            outline-none
                            focus-visible:ring-2
                            focus-visible:ring-blue-600
                            dark:focus-visible:ring-blue-600/50
                            hover:text-blue-600
                            ${
                              id === currentId
                                ? 'bg-blue-50 text-blue-800 dark:text-blue-500 dark:bg-blue-600/10'
                                : ''
                            }
                            `;

            return (
              <Link
                key={slug}
                passHref
                href={slug}
                // eslint don't detect ternary value?
                // eslint-disable-next-line jsx-a11y/aria-proptypes
                className={style}
              >
                {title}
              </Link>
            );
          })}
        </ul>
      )}
    </li>
  );
}

export default Aside;
