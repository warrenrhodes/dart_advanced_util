import * as React from 'react';
import { Prism, Highlight, themes } from 'prism-react-renderer';
import type { Language } from 'prism-react-renderer';
import useClipboard from 'react-use-clipboard';
import { FaCheck, FaRegClipboard } from 'react-icons/fa';

interface FenceProps {
  /**
   * Prism language
   */
  language: Language;

  /**
   * Lines to highlight
   */
  highlight: string;

  /**
   *
   */
  children: string;
}

/** NOTE:
 * https://github.com/markdoc/docs/blob/main/components/Code.js#L9
 */
//@ts-ignore
Prism.languages.markdoc = {
  tag: {
    pattern: /{%(.|\n)*?%}/i,
    inside: {
      tagType: {
        pattern: /^({%\s*\/?)(\w*|-)*\b/i,
        lookbehind: true,
      },
      id: /#(\w|-)*\b/,
      string: /".*?"/,
      equals: /=/,
      number: /\b\d+\b/i,
      variable: {
        pattern: /\$[\w.]+/i,
        inside: {
          punctuation: /\./i,
        },
      },
      function: /\b\w+(?=\()/,
      punctuation: /({%|\/?%})/i,
      boolean: /false|true/,
    },
  },
  variable: {
    pattern: /\$\w+/i,
  },
  function: {
    pattern: /\b\w+(?=\()/i,
  },
};

function Fence(props: FenceProps) {
  let { language, children: code } = props;

  let [isCopied, setCopied] = useClipboard(code, {
    successDuration: 1000,
  });

  return (
    <div className="relative" aria-live="polite">
      <Highlight language={language} code={code.trim()} theme={themes.dracula}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`p-3 pr-4 m-5 overflow-auto border-l-4 
        bg-transparent rounded-lg whitespace-pre-wrap
        bg-gradient-to-r from-blue-300/10 via-purple-300/10 to-blue-300/10 
        dark:from-blue-900/10 dark:via-purple-800/10 dark:to-blue-600/10 
        ${className}`}
            style={style}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              const { key: lineKey, ...restLineProps } = lineProps;

              return (
                <div key={i} {...restLineProps}>
                  <span className="table-cell text-right pr-4 select-none opacity-50">
                    {i + 1}
                  </span>
                  <span className="table-cell">
                    {line.map((token, key) => {
                      const tokenProps = getTokenProps({ token, key });
                      const { key: tokenKey, ...restTokenProps } = tokenProps;

                      return <span key={key} {...restTokenProps} />;
                    })}
                  </span>
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
      <button
        className="
          absolute
          top-2
          right-6

          inline-flex
          items-center
          justify-center

          p-1
          text-white

          bg-gray-600
          rounded

          transition
          duration-100
          ease-in

          appearance-none
          cursor-pointer
          select-none

          focus:outline-none

          hover:text-slate-200
          hover:bg-gray-700
          
          dark:bg-gray-600/20
          dark:hover:bg-gray-700/10
        "
        onClick={setCopied}
        title={isCopied ? 'copied' : 'copy'}
      >
        {isCopied ? (
          <FaCheck className="h-4 w-4" />
        ) : (
          <FaRegClipboard className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

export default Fence;
