import House from '../../../images/house.svg';
import { NewsList } from './NewsList/NewsList';
import { useNewsProps } from './hooks';

export const News = () => {
  const { news, error, isLoading } = useNewsProps();

  if (isLoading) return <div>Загрузка</div>;
  if (error) return <div>Ошибка</div>;

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
      </section>
      <NewsList newsList={news} />
    </main>
  );
};
