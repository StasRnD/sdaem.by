import { useNewsDetailsProps } from './hooks';

export const NewsDetails = () => {
  const { newsDetails, error, isLoading } = useNewsDetailsProps();

  if (isLoading || !newsDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={newsDetails.image} />
      <p>{newsDetails.text}</p>
      <p>{newsDetails.title}</p>
    </div>
  );
};
