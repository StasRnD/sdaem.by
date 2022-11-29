import { NewsDetails } from '../../../types/types';
import { Pagination, PaginationButton } from './style';

type paginationProps = {
  pageQuantity: NewsDetails[];
  activePage: number;
  itemsPerPage: number;
  onClickButtonPagination: (page: number) => void;
};

export const PaginationComponent = ({
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
    <Pagination>
      {pageQuantity.length > itemsPerPage &&
        quantityButtons.map((buttonValue, index) => {
          return (
            <PaginationButton
              key={index}
              onClick={() => {
                onClickButtonPagination(buttonValue);
              }}
              className={`${activePage === buttonValue && 'activeButton'}`}
            >
              {buttonValue}
            </PaginationButton>
          );
        })}
    </Pagination>
  );
};
