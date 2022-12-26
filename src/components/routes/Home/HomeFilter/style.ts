import styled from 'styled-components';

const activeFilterButton = `
    border-radius: 10px 10px 0 0;
    color: blue;
    background-color: white;
`;

export const HomeFilter = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FilterButtonsList = styled.div`
  display: flex;
`;

export const FilterButton = styled.button<{
  activeFilter: string;
  value: string;
}>`
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  padding: 13px 20px;
  background-color: rgba(45, 57, 136, 0.5);
  color: white;
  ${(props) =>
    props.activeFilter === props.value ? `${activeFilterButton}` : ''};
  cursor: pointer;
`;
