import styled from 'styled-components';

export const Pagination = styled.section`
  margin-top: 80px;
  display: flex;
  column-gap: 3px;
`;

export const PaginationButton = styled.button.attrs((props) => ({
  className: props.className,
}))`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  padding: 0 6px;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #ffd54f;
  }

  &.activeButton {
    border-bottom: 2px solid #ffd54f;
  }
`;
