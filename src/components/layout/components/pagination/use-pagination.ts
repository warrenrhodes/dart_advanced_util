import { useRouter } from 'next/router';

type LinkItem = Pick<SidebarItem, 'title' | 'slug'>;

export type SidebarItem = {
  title: string;
  slug?: string;
  children: Array<{
    title: string;
    slug: string;
    id: string;
    status?: string;
  }>;
};

export function usePagination() {
  let router = useRouter();

  let prev: LinkItem | undefined;
  let next: LinkItem | undefined;

  // let links = SIDEBAR.reduce<LinkItem[]>(
  //   (prev, next) => prev.concat(next.children),
  //   []
  // );

  // let makeURL = ({ title, slug }: LinkItem) => {
  //   return {
  //     title,
  //     slug,
  //   };
  // };

  let getIndex = SIDEBAR.findIndex((item) => {
    return router.pathname.toLowerCase() === item?.slug;
  });

  if (getIndex > 0) {
    prev = SIDEBAR[getIndex - 1];
  }

  if (getIndex !== -1 && getIndex < SIDEBAR.length - 1) {
    next = SIDEBAR[getIndex + 1];
  }

  return {
    prev,
    next,
  };
}

export const SIDEBAR: Array<SidebarItem> = [
  {
    title: 'Getting Started',
    slug: '/docs',
    children: [
      {
        title: 'Overview',
        id: 'overview',
        slug: '/docs',
      },
    ],
  },
  {
    title: 'Custom Func',
    slug: '/custom-func',
    children: [
      {
        title: 'fprint',
        id: 'fprint',
        slug: '/custom-func#fprint',
      },
    ],
  },
  {
    title: 'Date',
    slug: '/date',
    children: [
      {
        title: 'isToday',
        id: 'istoday',
        slug: '/date#istoday',
      },
      {
        title: 'isYesterday',
        id: 'isyesterday',
        slug: '/date#isyesterday',
      },
      {
        title: 'isTomorrow',
        id: 'istomorrow',
        slug: '/date#istomorrow',
      },
      {
        title: 'isInPast',
        id: 'isinpast',
        slug: '/date#isinpast',
      },
      {
        title: 'isInFuture',
        id: 'isinfuture',
        slug: '/date#isinfuture',
      },
      {
        title: 'isDateInRange',
        id: 'isdateinrange',
        slug: '/date#isdateinrange',
      },
      {
        title: 'localizedWeekday',
        id: 'localizedweekday',
        slug: '/date#localizedweekday',
      },
      {
        title: 'localizedMonth',
        id: 'localizedmonth',
        slug: '/date#localizedmonth',
      },
      {
        title: 'hasDurationPassed',
        id: 'hasdurationpassed',
        slug: '/date#hasdurationpassed',
      },
      {
        title: 'addBusinessDays',
        id: 'addbusinessdays',
        slug: '/date#addbusinessdays',
      },
      {
        title: 'subtractBusinessDays',
        id: 'subtractbusinessdays',
        slug: '/date#subtractbusinessdays',
      },
      {
        title: 'startOfMonth',
        id: 'startofmonth',
        slug: '/date#startofmonth',
      },
      {
        title: 'endOfMonth',
        id: 'endofmonth',
        slug: '/date#endofmonth',
      },
      {
        title: 'hasALeapYear',
        id: 'hasaeapyear',
        slug: '/date#hasaeapyear',
      },
    ],
  },
  {
    title: 'List',
    slug: '/lists',
    children: [
      {
        title: 'operator *',
        id: 'operator-*',
        slug: '/lists#operator-*',
      },
      {
        title: 'operator +',
        id: 'operator-+',
        slug: '/lists#operator-+',
      },
      {
        title: 'count',
        id: 'count',
        slug: '/lists#count',
      },
      {
        title: 'sum',
        id: 'sum',
        slug: '/lists#sum',
      },
      {
        title: 'average',
        id: 'average',
        slug: '/lists#average',
      },
      {
        title: 'median',
        id: 'median',
        slug: '/lists#median',
      },
      {
        title: 'max',
        id: 'max',
        slug: '/lists#max',
      },
      {
        title: 'min',
        id: 'min',
        slug: '/lists#min',
      },

      {
        title: 'product',
        id: 'product',
        slug: '/lists#product',
      },
    ],
  },
  {
    title: 'String',
    slug: '/string',
    children: [
      {
        title: 'title',
        id: 'title-case',
        slug: '/string#title-case',
      },
      {
        title: 'capitalize',
        id: 'capitalize',
        slug: '/string#capitalize',
      },
      {
        title: 'strip',
        id: 'strip',
        slug: '/string#strip',
      },
      {
        title: 'center',
        id: 'center',
        slug: '/string#center',
      },
      {
        title: 'format',
        id: 'format',
        slug: '/string#format',
      },
      {
        title: 'charToUpper',
        id: 'char-to-upper',
        slug: '/string#char-to-upper',
      },
      {
        title: 'isUpper',
        id: 'is-upper',
        slug: '/string#is-upper',
      },
      {
        title: 'isLow',
        id: 'is-low',
        slug: '/string#is-low',
      },
      {
        title: 'count',
        id: 'count',
        slug: '/string#count',
      },
      {
        title: 'isNumeric',
        id: 'is-numeric',
        slug: '/string#is-numeric',
      },
      {
        title: 'lJust',
        id: 'l-just',
        slug: '/string#l-just',
      },
      {
        title: 'rJust',
        id: 'r-just',
        slug: '/string#r-just',
      },
      {
        title: 'isValidEmail',
        id: 'is-valid-email',
        slug: '/string#is-valid-email',
      },
      {
        title: 'isAlphanumeric',
        id: 'is-alphanumeric',
        slug: '/string#is-alphanumeric',
      },
      {
        title: 'isBlank',
        id: 'is-blank',
        slug: '/string#is-blank',
      },
      {
        title: 'reverse',
        id: 'reverse',
        slug: '/string#reverse',
      },
      {
        title: 'toCamelCase',
        id: 'to-camel-case',
        slug: '/string#to-camel-case',
      },
      {
        title: 'toKebabCase',
        id: 'to-kebab-case',
        slug: '/string#to-kebab-case',
      },
      {
        title: 'toSnakeCase',
        id: 'to-snake-case',
        slug: '/string#to-snake-case',
      },
      {
        title: 'truncate',
        id: 'truncate',
        slug: '/string#truncate',
      },
      {
        title: 'containsIgnoreCase',
        id: 'contains-ignore-case',
        slug: '/string#contains-ignore-case',
      },
      {
        title: 'removeWhitespaces',
        id: 'remove-whitespaces',
        slug: '/string#remove-whitespaces',
      },
      {
        title: 'removePunctuation',
        id: 'remove-punctuation',
        slug: '/string#remove-punctuation',
      },
      {
        title: 'isPalindrome',
        id: 'is-palindrome',
        slug: '/string#is-palindrome',
      },
      {
        title: 'wordCount',
        id: 'word-count',
        slug: '/string#word-count',
      },
      {
        title: 'swapcase',
        id: 'swap-case',
        slug: '/string#swap-case',
      },
      {
        title: 'isDigit',
        id: 'is-digit',
        slug: '/string#is-digit',
      },
      {
        title: 'isUrl',
        id: 'is-url',
        slug: '/string#is-url',
      },
    ],
  },
];
