import { NewsListComponent } from './NewsList/NewsListComponent';
import { useNewsProps } from './hooks';
import {
  News,
  NewsHeader,
  NewsInfo,
  NewsRoad,
  ImageHouse,
  NewsRoadText,
  NewsTitle,
} from './style';

export const NewsComponent = () => {
  const { news, error, isLoading } = useNewsProps();

  if (isLoading) return <div>Загрузка</div>;
  if (error) return <div>Ошибка</div>;

  return (
    <News>
      <NewsHeader>
        <NewsInfo>
          <NewsRoad>
            <ImageHouse />
            <NewsRoadText>Новости</NewsRoadText>
          </NewsRoad>
          <NewsTitle>Новости</NewsTitle>
        </NewsInfo>
      </NewsHeader>
      <NewsListComponent newsList={news} />
    </News>
  );
};
