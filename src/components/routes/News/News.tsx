import Search from '../../../images/search.svg';
import House from '../../../images/house.svg';
import { NewsItem } from './NewsItem/NewsItem';
import { useNewsProps } from './hooks';

export const News = () => {
  const { news, error, isLoading } = useNewsProps();

  return (
    <main className='news body__news'>
      <section className='news__header'>
        <div className='news__way'>
          <div className='news__road'>
            <img
              src={House}
              alt='картинка домика'
              className='news__road-image'
            />
            <p className='news__road-text'>Новости</p>
          </div>
          <h2 className='news__title'>Новости</h2>
        </div>
        <div className='news__fiter'>
          <form action='' className='news__form'>
            <input type='text' className='news__filter-input' />
            <button type='button' className='news__button-filter'></button>
          </form>
        </div>
      </section>
      <section className='newsList'>
        {news.map((newsItem) => {
          return <NewsItem key={newsItem.id} data={newsItem} />;
        })}
      </section>
      <section>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </section>
    </main>
  );
};
