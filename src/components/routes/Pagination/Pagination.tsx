import { NewsDetails } from '../../../types/types';

type paginationProps = {
  pageQuantity: NewsDetails[];
  activePage: number;
  itemsPerPage: number;
  onClickButtonPagination: (page: number) => void;
};

export const Pagination = ({
  pageQuantity,
  activePage,
  onClickButtonPagination,
  itemsPerPage,
}: paginationProps) => {
  const quantityButtons = Array.from(
    { length: Math.ceil(pageQuantity.length / itemsPerPage) },
    (v, i) => i + 1
  );

  return (
    <section>
      {pageQuantity.length > itemsPerPage &&
        quantityButtons.map((buttonValue, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                onClickButtonPagination(buttonValue);
              }}
              className={`${activePage === buttonValue && 'activeButton'}`}
            >
              {buttonValue}
            </button>
          );
        })}
    </section>
  );
};
