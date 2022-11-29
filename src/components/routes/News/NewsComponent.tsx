import { NewsListComponent } from './NewsList/NewsListComponent';
import { InfoBlockComponent } from '../../Common/InfoBlock/InfoBlock';
import { useNewsProps } from './hooks';
import { News, NewsUnderlay, NewsContent } from './style';

export const NewsComponent = () => {
  const { news, error, isLoading } = useNewsProps();

  if (isLoading) return <div>Загрузка</div>;
  if (error) return <div>Ошибка</div>;

  return (
    <News>
      <NewsContent>
        <InfoBlockComponent homePage={'Новости'} title={'Новости'} />
        <NewsListComponent newsList={news} />
      </NewsContent>

      <NewsUnderlay></NewsUnderlay>
    </News>
  );
};
