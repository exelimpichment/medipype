import { format } from 'date-fns';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { DateRange } from 'react-day-picker';
import useValidatePageParams from './useValidatePageParams';

const useQueryString = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const page = useValidatePageParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const createDateQueryString = useCallback(
    (value: DateRange | undefined) => {
      const params = new URLSearchParams(searchParams);

      if (value === undefined) {
        params.set('to', '');
        params.set('from', '');
        return params.toString();
      }

      if (value.from) {
        params.set('from', format(value.from, 'yyyy-MM-dd'));
      }

      if (value.to) {
        params.set('to', format(value.to, 'yyyy-MM-dd'));
      }

      return params.toString();
    },
    [searchParams]
  );

  const createLimitQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);

      params.set('limit', value);

      return params.toString();
    },
    [searchParams]
  );

  const createOrderQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);

      params.set('order', value);

      return params.toString();
    },
    [searchParams]
  );

  const createPageQueryString = useCallback(
    (action: 'increment' | 'decrement') => {
      const params = new URLSearchParams(searchParams);

      switch (action) {
        case 'increment':
          params.set('page', String(Number(page) + 1));
          break;
        case 'decrement':
          params.set(
            'page',
            String(Number(page) > 1 ? Number(page) - 1 : Number(page))
          );
          break;
      }

      return params.toString();
    },
    [searchParams, page]
  );

  return {
    createQueryString,
    createDateQueryString,
    createLimitQueryString,
    createOrderQueryString,
    createPageQueryString,
    pathname,
    router,
  };
};

export default useQueryString;
