import { useNewsDetailsProps } from './hooks';

export const NewsDetails = () => {
  const { newsDetails, error, isLoading } = useNewsDetailsProps();

  if (isLoading || !newsDetails) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ошибка...</div>;
  }

  return (
    <div>
      <img src={newsDetails.image} alt='фото новости' />
      <p>{newsDetails.text}</p>
      <p>{newsDetails.title}</p>
    </div>
  );
};
