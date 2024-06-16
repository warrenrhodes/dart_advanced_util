import React from 'react';
import type { ReactNode } from 'react';
import { DisclosureButton } from '@headlessui/react';
import { FaChevronRight } from 'react-icons/fa';
import { cn } from '@/lib/utils';

interface DisclosureProps {
  label?: string;
  children: ReactNode;
}

function Disclosure(props: DisclosureProps) {
  let { label, children, ...rest } = props;

  return (
    <DisclosureButton
      className="
        flex
        items-center

        w-full 
        px-1.5
        py-2

        text-sm
        text-slate-900
        font-semibold

        rounded-lg

        ease-in
        duration-100
        transition-colors

        outline-none
        focus-visible:ring-2
      focus-visible:ring-blue-600
      dark:focus-visible:ring-blue-600/10

      dark:text-white
        backdrop-blur
      hover:bg-gray-100
      hover:dark:bg-gray-400/10

        [&>p]:m-0
      "
      {...rest}
    >
      {({ open }) => (
        <React.Fragment>
          <FaChevronRight
            className={cn('w-5 h-5 ease-in duration-150', open && 'rotate-90')}
          />
          {label ?? children}
        </React.Fragment>
      )}
    </DisclosureButton>
  );
}

export default Disclosure;
