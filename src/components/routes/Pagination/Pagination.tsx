export const Pagination = ({ filterNews, setFilterNews }: any) => {
  const onClickButton = () => {
    setFilterNews((oldFilters: any) => [...oldFilters].slice(0, 4));
  };

  return (
    <div>
      <button onClick={onClickButton}>1</button>
    </div>
  );
};
