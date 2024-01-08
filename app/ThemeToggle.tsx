'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { PiSunDimLight } from 'react-icons/pi';
import { RiMoonLine } from 'react-icons/ri';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={48}
        height={48}
        sizes="48x48"
        alt="Loading Light/Dark Toggle"
        title="Loading Light/Dark Toggle"
        priority={false}
      />
    );

  if (resolvedTheme === 'dark') {
    return (
      <button className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full hover:bg-gray-400">
        <PiSunDimLight size={32} onClick={() => setTheme('light')} />
      </button>
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <button className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full hover:bg-gray-400">
        <RiMoonLine size={26} onClick={() => setTheme('dark')} />
      </button>
    );
  }
};

export default ThemeToggle;
