import { Button } from '@headlessui/react';
import { VscGithub } from 'react-icons/vsc';
import React from 'react';
import Link from 'next/link';

export default function GitHubButton() {
  return (
    <Link href="https://github.com/warrenrhodes/dart_utils" target="_blank">
      <Button
        className="
    inline-flex
    items-center
    p-2.5
    text-sm
    text-slate-600
    hover:text-slate-700
    dark:text-slate-300
    dark:hover:text-slate-200

    border
    rounded-lg

    bg-white
    hover:bg-gray-50
    dark:bg-gray-900
    dark:hover:bg-gray-800

    focus-visible:ring-1
    focus-visible:ring-blue-500
    focus-visible:border-blue-500
    focus-visible:outline-none
    dark:border-gray-800
    dark:focus-visible:border-blue-500
  "
      >
        <VscGithub />
      </Button>
    </Link>
  );
}
