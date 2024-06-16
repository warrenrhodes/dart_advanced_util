'use client';
import React from 'react';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import { FaRegMoon } from 'react-icons/fa';
import { GoSun } from 'react-icons/go';
import { RiComputerLine } from 'react-icons/ri';

import { useTheme } from 'next-themes';
import { useIsMounted } from './use-is-mounted';

const THEMES = {
  dark: {
    id: 'dark',
    name: 'Dark',
    icon: <FaRegMoon />,
  },
  light: {
    id: 'light',
    name: 'Light',
    icon: <GoSun />,
  },
  system: {
    id: 'system',
    name: 'System',
    icon: <RiComputerLine />,
  },
};

export function SelectTheme() {
  const { theme, setTheme } = useTheme();

  const currentTheme = theme as keyof typeof THEMES;

  return (
    <Listbox value={theme} onChange={setTheme}>
      <div className="relative">
        <ListboxButton
          aria-label="Select theme"
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

            ease-in
            transition
            duration-150

            focus-visible:ring-1
            focus-visible:ring-blue-500
            focus-visible:border-blue-500
            focus-visible:outline-none
            dark:border-gray-800
            dark:focus-visible:border-blue-500
          "
        >
          {THEMES[currentTheme].icon}
        </ListboxButton>
        <Transition
          as={React.Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions
            className="
              absolute
              mt-1.5
              overflow-auto
              w-32
              max-h-60
              p-2
              border
              border-gray-200
              rounded-lg
              bg-white
              shadow-sm
              focus:outline-none
              dark:bg-gray-900
              dark:border-gray-800
            "
          >
            {Object.values(THEMES).map(({ id, name }) => (
              <ListboxOption
                key={id}
                value={id}
                className={({ focus }) => `
                  flex
                  items-center
                  justify-between
                  px-4
                  py-2
                  text-sm
                  rounded-lg
                  cursor-pointer
                  select-none
                  duration-300
                  transition-colors
                  ${
                    focus
                      ? 'text-blue-700 dark:text-blue-600 dark:hover:text-blye-300 bg-blue-50 dark:bg-blue-800/10'
                      : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 bg-white hover:bg-gray-50 dark:bg-transparent'
                  }
                `}
              >
                {name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );
}
