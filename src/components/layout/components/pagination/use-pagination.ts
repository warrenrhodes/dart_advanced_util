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
        id: 'checking-if-a-date-is-today',
        slug: '/date#isToday',
      },
      {
        title: 'isYesterday',
        id: 'checking-if-a-date-is-yesterday',
        slug: '/date#isYesterday',
      },
      {
        title: 'isTomorrow',
        id: 'checking-if-a-date-is-tomorrow',
        slug: '/date#isTomorrow',
      },
      {
        title: 'isInPast',
        id: 'checking-if-a-date-is-in-the-past',
        slug: '/date#isInPast',
      },
      {
        title: 'isInFuture',
        id: 'checking-if-a-date-is-in-the-future',
        slug: '/date#isInFuture',
      },
      {
        title: 'isDateInRange',
        id: 'checking-if-a-date-is-in-a-range',
        slug: '/date#isDateInRange',
      },
      {
        title: 'localizedWeekday',
        id: 'getting-localized-weekday',
        slug: '/date#localizedWeekday',
      },
      {
        title: 'localizedMonth',
        id: 'getting-localized-month',
        slug: '/date#localizedMonth',
      },
      {
        title: 'hasDurationPassed',
        id: 'checking-if-a-duration-has-passed',
        slug: '/date#hasDurationPassed',
      },
      {
        title: 'addBusinessDays',
        id: 'adding-business-days',
        slug: '/date#addBusinessDays',
      },
      {
        title: 'subtractBusinessDays',
        id: 'subtracting-business-days',
        slug: '/date#subtractBusinessDays',
      },
      {
        title: 'startOfMonth',
        id: 'getting-start-of-month',
        slug: '/date#startOfMonth',
      },
      {
        title: 'endOfMonth',
        id: 'getting-end-of-month',
        slug: '/date#endOfMonth',
      },
      {
        title: 'hasALeapYear',
        id: 'checking-for-leap-year',
        slug: '/date#hasALeapYear',
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
        id: 'finding-maximum-value',
        slug: '/lists#max',
      },
      {
        title: 'min',
        id: 'finding-minimum-value',
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
        slug: '/string#title',
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
        slug: '/string#charToUpper',
      },
      {
        title: 'isUpper',
        id: 'is-upper',
        slug: '/string#isUpper',
      },
      {
        title: 'isLow',
        id: 'is-low',
        slug: '/string#isLow',
      },
      {
        title: 'count',
        id: 'count',
        slug: '/string#count',
      },
      {
        title: 'isNumeric',
        id: 'is-numeric',
        slug: '/string#isNumeric',
      },
      {
        title: 'lJust',
        id: 'l-just',
        slug: '/string#lJust',
      },
      {
        title: 'rJust',
        id: 'r-just',
        slug: '/string#rJust',
      },
      {
        title: 'isValidEmail',
        id: 'is-valid-email',
        slug: '/string#isValidEmail',
      },
      {
        title: 'isAlphanumeric',
        id: 'is-alphanumeric',
        slug: '/string#isAlphanumeric',
      },
      {
        title: 'isBlank',
        id: 'is-blank',
        slug: '/string#isBlank',
      },
      {
        title: 'reverse',
        id: 'reverse',
        slug: '/string#reverse',
      },
      {
        title: 'toCamelCase',
        id: 'to-camel-case',
        slug: '/string#toCamelCase',
      },
      {
        title: 'toKebabCase',
        id: 'to-kebab-case',
        slug: '/string#toKebabCase',
      },
      {
        title: 'toSnakeCase',
        id: 'to-snake-case',
        slug: '/string#toSnakeCase',
      },
      {
        title: 'truncate',
        id: 'truncate',
        slug: '/string#truncate',
      },
      {
        title: 'containsIgnoreCase',
        id: 'contains-ignore-case',
        slug: '/string#containsIgnoreCase',
      },
      {
        title: 'removeWhitespaces',
        id: 'remove-whitespaces',
        slug: '/string#removeWhitespaces',
      },
      {
        title: 'removePunctuation',
        id: 'remove-punctuation',
        slug: '/string#removePunctuation',
      },
      {
        title: 'isPalindrome',
        id: 'is-palindrome',
        slug: '/string#isPalindrome',
      },
      {
        title: 'wordCount',
        id: 'word-count',
        slug: '/string#wordCount',
      },
      {
        title: 'swapcase',
        id: 'swap-case',
        slug: '/string#swapcase',
      },
      {
        title: 'isDigit',
        id: 'is-digit',
        slug: '/string#isDigit',
      },
      {
        title: 'isUrl',
        id: 'is-url',
        slug: '/string#isUrl',
      },
    ],
  },
];
