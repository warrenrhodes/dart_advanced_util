import '@/styles/globals.css';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import type { MarkdocNextJsPageProps } from '@markdoc/next.js';
import { ThemeProvider } from 'next-themes';
import { Header } from '@/components/header';
import { LayoutDocs } from '@/components/layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The dart avanced utils',
  description:
    'A collection of extension methods for the String class to add common utility functions.',
  icons: {
    icon: [
      {
        url: '/logo.png',
        href: '/logo.png',
      },
    ],
  },
};

interface MyAppProps extends AppProps {
  pageProps: MarkdocNextJsPageProps;
}

const TITLE = 'The dart avanced utils';
const DESCRIPTION =
  'A collection of extension methods for the String class to add common utility functions.';
let SITE = 'https://' + process.env.VERCEL_URL;

function MyApp(props: MyAppProps) {
  let { Component, pageProps, router } = props;

  const [isServerSideRendering, setIsServerSideRendering] = useState(true);

  useEffect(() => {
    setIsServerSideRendering(false);
  }, []);

  let title = TITLE;
  let description = DESCRIPTION;
  const markdoc = pageProps.markdoc;
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title;
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  }

  if (isServerSideRendering) {
    return <div></div>;
  }

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <ThemeProvider attribute="class" disableTransitionOnChange enableSystem>
        <Header />
        <LayoutDocs markdoc={pageProps.markdoc}>
          <Component key={router.route} {...pageProps} />
        </LayoutDocs>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
