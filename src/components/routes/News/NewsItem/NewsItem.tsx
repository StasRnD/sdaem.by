import { Link } from 'react-router-dom';
import { NewsDetails } from '../../../../types/types';

export const NewsItem = ({ data }: any) => {
  return (
    <div key={data.index} className='news-item'>
      <img
        src={data.image}
        alt='нвостна картинка'
        className='news-item__image'
      />
      <div className='news-item__description'>
        <h3 className='news-item__title'>{data.title}</h3>
        <p className='news-item__text'>{data.text}</p>
        <div className='news-item__info'>
          <p className='news-item__date'>14 января 2002</p>
          <button className='news-item__butoon'>
            <Link to={`${data.id}`}>Читать</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
