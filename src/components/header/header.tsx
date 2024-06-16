import Link from 'next/link';
import { SelectTheme } from './select-theme';
import GitHubButton from './go-to-repo';

function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-20

        flex

        w-full
        h-[4rem]
        py-3

        mx-auto

        border-b
        border-gray-200

        backdrop-blur
        supports-backdrop-blur:bg-white/80

        dark:border-gray-800
        dark:supports-backdrop-blur:bg-gray-900/25
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          px-4
          w-full
          h-full
          mx-auto
          max-w-full
          lg:max-w-8xl
        "
      >
        <div className="flex items-center">
          <Link
            href="/docs"
            className="
              flex
              flex-row
              items-center
        
              font-bold
              text-gray-600

              dark:text-white
            "
          >
            🔮 Advanced Dart Util
          </Link>
        </div>
        <div className="flex gap-4">
          <div>
            <GitHubButton />
          </div>
          <div>
            <SelectTheme />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
