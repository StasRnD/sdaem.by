import {
  NewsItem,
  NewsItemImage,
  NewsItemDescription,
  NewsItemTitle,
  NewsItemText,
  NewsItemInfo,
  NewsItemButton,
  NewsItemButtonLink,
} from './style';
import { ItemDateComponent } from '../../../Common/ItemDate/ItemDateComponent';
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
          <ItemDateComponent date={data.date} color={`#8291A3`} />
          <NewsItemButton className='news-item__butoon'>
            <NewsItemButtonLink to={`${data.id}`}>Читать</NewsItemButtonLink>
          </NewsItemButton>
        </NewsItemInfo>
      </NewsItemDescription>
    </NewsItem>
  );
};
