import { useNewsDetailsProps, useRandomNewsProps } from './hooks';
import {
  NewsDetails,
  NewsDetailsImage,
  NewsDetailsText,
  NewsDetailsDateAndSocialNetworks,
  NewsDetailsUnderLay,
  NewsDetailsContent,
  NewsDetailsRandom,
  NewsDetailsRandomHeading,
  NewsDetailsRandomContent,
  NewsDetailsRandomList,
  NewsDetailsRandomListUnderLay,
} from './style';
import { InfoBlockComponent } from '../../Common/InfoBlock/InfoBlock';
import { ItemDateComponent } from '../../Common/ItemDate/ItemDateComponent';
import { SocialNetworkComponent } from '../../Common/SocialNetwork/SocialNetworkComponent';
import { NewsItemComponent } from '../News/NewsItem/NewsItemComponent';
import { scrollToTop } from '../../Common/Scroll';

export const NewsDetailsComponent = () => {
  const { newsDetails, error, isLoading } = useNewsDetailsProps();
  const { randomNews } = useRandomNewsProps();

  if (isLoading || !newsDetails || !randomNews) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ошибка...</div>;
  }

  scrollToTop();
  return (
    <NewsDetails>
      <NewsDetailsUnderLay />
      <NewsDetailsContent>
        <InfoBlockComponent
          homePage={'Новости'}
          openPage={newsDetails.title}
          title={newsDetails.title}
        />
        <NewsDetailsDateAndSocialNetworks>
          <ItemDateComponent date={newsDetails.date} color={`#664EF9`} />
          <SocialNetworkComponent></SocialNetworkComponent>
        </NewsDetailsDateAndSocialNetworks>
        <NewsDetailsImage src={newsDetails.image}></NewsDetailsImage>
        <NewsDetailsText>{newsDetails.text}</NewsDetailsText>
      </NewsDetailsContent>

      <NewsDetailsRandom>
        <NewsDetailsRandomContent>
          <NewsDetailsRandomHeading>Читайте также</NewsDetailsRandomHeading>
          <NewsDetailsRandomList>
            {randomNews.map((newsItem) => {
              return <NewsItemComponent data={newsItem} key={newsItem.id} />;
            })}
          </NewsDetailsRandomList>
        </NewsDetailsRandomContent>
        <NewsDetailsRandomListUnderLay />
      </NewsDetailsRandom>
    </NewsDetails>
  );
};
