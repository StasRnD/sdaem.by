import styled from 'styled-components';

export const Filter = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const FilterShot = styled.div<{ activeFilter: string }>`
  display: flex;
  background-color: #fff;
  padding: 15px 20px 20px;
  column-gap: 20px;
  border-radius: ${(props) =>
    props.activeFilter === 'apartaments' ? '0 10px 10px' : '10px'};
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 11px;
  width: 100%;
  max-width: 150px;
  &:nth-last-child(n + 2) {
    padding-right: 20px;
    border-right: 1px solid rgba(102, 78, 249, 0.1);
  }
  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #bdbdbd;
  }
`;

export const FilterAdvance = styled.div`
  display: flex;
`;
