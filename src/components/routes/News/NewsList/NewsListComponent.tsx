import { NewsItemComponent } from '../NewsItem/NewsItemComponent';
import { PaginationComponent } from '../../Pagination/PaginationComponent';
import {
  NewsList,
  NewsListFilter,
  NewsListSearch,
  NewsListButton,
} from './style';
import { NewsDetails } from '../../../../types/types';
import { useMemo, useState } from 'react';
import set from 'lodash/set';

type newsDetailsProps = {
  newsList: NewsDetails[];
};

interface FiltersProps {
  query: string;
  onChange: (value: string, filterName: string) => void;
}

export const NewsListComponent = ({ newsList }: newsDetailsProps) => {
  const url = new URL(document.location.href);

  const [filters, setFilters] = useState(() => {
    return {
      query: url.searchParams.get('query') || '',
    };
  });

  const [activePage, setActivePage] = useState(() => {
    return Number(url.searchParams.get('page')) || 1;
  });

  const [searchValue, setSearchValue] = useState(filters.query);

  const itemsPerPage = 9;

  const onChange: FiltersProps['onChange'] = (value, filterName) => {
    setFilters((oldFilters) => set({ ...oldFilters }, filterName, value));
    url.searchParams.set(filterName, value);
    window.history.pushState(null, '', url.search);
  };

  const onSubmitFilterForm: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    setActivePage(1);
    url.searchParams.delete('page');
    onChange(searchValue, 'query');
  };

  const onChangeFilterInput: React.ChangeEventHandler<HTMLInputElement> = (
    evt
  ) => {
    setSearchValue(evt.target.value);
  };

  const onClickButtonPagination = (page: number) => {
    url.searchParams.set('page', String(page));
    window.history.pushState(null, '', url.search);
    setActivePage(page);
  };

  const filterNews = useMemo(() => {
    return newsList.filter((newsItem) =>
      (newsItem.title + newsItem.text)
        .toLowerCase()
        .includes(filters.query.toLowerCase())
    );
  }, [filters, newsList]);

  const paginatedNews = useMemo(() => {
    const indexOfLastNews = activePage * itemsPerPage;
    const indexOfFirstNews = indexOfLastNews - itemsPerPage;

    return filterNews.slice(indexOfFirstNews, indexOfLastNews);
  }, [activePage, filterNews]);

  return (
    <>
      <NewsList>
        <NewsListFilter onSubmit={onSubmitFilterForm}>
          <NewsListSearch value={searchValue} onChange={onChangeFilterInput} />
          <NewsListButton />
        </NewsListFilter>

        {paginatedNews.map((newsItem: NewsDetails) => {
          return <NewsItemComponent key={newsItem.id} data={newsItem} />;
        })}
      </NewsList>
      <PaginationComponent
        pageQuantity={filterNews}
        activePage={activePage}
        onClickButtonPagination={onClickButtonPagination}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};
