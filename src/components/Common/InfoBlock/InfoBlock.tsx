import {
  InfoBlock,
  InfoBlockContent,
  InfoBlockRoad,
  InfoBlockImage,
  InfoBlockTextItem,
  InfoBlockTitle,
} from './style';

interface InfoPageProps {
  homePage: string;
  openPage?: string;
  title: string;
}
export const InfoBlockComponent = ({
  homePage,
  openPage,
  title,
}: InfoPageProps) => {
  return (
    <InfoBlock>
      <InfoBlockContent>
        <InfoBlockRoad>
          <InfoBlockImage />
          <InfoBlockTextItem>{homePage}</InfoBlockTextItem>
          {openPage && <InfoBlockTextItem>{openPage}</InfoBlockTextItem>}
        </InfoBlockRoad>
        <InfoBlockTitle>{title}</InfoBlockTitle>
      </InfoBlockContent>
    </InfoBlock>
  );
};
