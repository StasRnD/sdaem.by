import { NewsItem } from '../NewsItem/NewsItem';
import { Pagination } from '../../Pagination/Pagination';
import { NewsDetails } from '../../../../types/types';
import { useState } from 'react';
import set from 'lodash/set';

type newsDetailsProps = {
  newsList: NewsDetails[];
};

interface FiltersProps {
  query: string;
  onChange: (value: string, filterName: string) => void;
}

export const NewsList = ({ newsList }: newsDetailsProps) => {
  const [filters, setFilters] = useState(() => {
    const url = new URL(document.location.href);
    return {
      query: url.searchParams.get('query') || '',
    };
  });

  const [searchValue, setSearchValue] = useState<string>(filters.query);

  const onChange: FiltersProps['onChange'] = (value, filterName) => {
    const url = new URL(document.location.href);
    setFilters((oldFilters) => set({ ...oldFilters }, filterName, value));
    url.searchParams.set(filterName, value);
    window.history.pushState(null, '', url.search);
  };

  const submitFilterForm: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    onChange(searchValue, 'query');
  };

  const onChangeFilterInput: React.ChangeEventHandler<HTMLInputElement> = (
    evt
  ) => {
    setSearchValue(evt.target.value);
  };

  const filterNews = newsList.filter((newsItem) =>
    (newsItem.title + newsItem.text)
      .toLowerCase()
      .includes(filters.query.toLowerCase())
  );

  return (
    <section className='newsList news__newsList'>
      <form action='' className='newsList__filter' onSubmit={submitFilterForm}>
        <input
          type='text'
          className='newsList__search'
          value={searchValue}
          onChange={onChangeFilterInput}
        />
        <button type='submit' className='newsList__button'></button>
      </form>

      {filterNews.map((newsItem: NewsDetails) => {
        return <NewsItem key={newsItem.id} data={newsItem} />;
      })}
      <Pagination filterNews={filterNews} />
    </section>
  );
};
