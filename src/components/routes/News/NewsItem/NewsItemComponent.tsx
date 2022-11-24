import {
  NewsItem,
  NewsItemImage,
  NewsItemDescription,
  NewsItemTitle,
  NewsItemText,
  NewsItemInfo,
  NewsItemDate,
  NewsItemButton,
  NewsItemButtonLink,
} from './style';
import { NewsDetails } from '../../../../types/types';

type NewsItemProps = { data: NewsDetails };

export const NewsItemComponent = ({ data }: NewsItemProps) => {
  return (
    <NewsItem>
      <NewsItemImage src={data.image} />
      <NewsItemDescription>
        <NewsItemTitle>{data.title}</NewsItemTitle>
        <NewsItemText>{data.text}</NewsItemText>
        <NewsItemInfo>
          <NewsItemDate>14 января 2002</NewsItemDate>
          <NewsItemButton className='news-item__butoon'>
            <NewsItemButtonLink to={`${data.id}`}>Читать</NewsItemButtonLink>
          </NewsItemButton>
        </NewsItemInfo>
      </NewsItemDescription>
    </NewsItem>
  );
};
