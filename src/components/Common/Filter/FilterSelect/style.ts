import styled from 'styled-components';

export const FilterSelect = styled.div`
  position: relative;
`;

export const FilterSelectHeader = styled.div`
  display: flex;
  cursor: pointer;
  background: #fff;
  border: 2px solid rgba(102, 78, 249, 0.8);
  border-radius: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #686868;
  padding: 9px 8px 11px 12px;
`;

export const FilterSelectCurrent = styled.span`
  display: flex;
`;

export const FilterSelectIcon = styled.div`
  display: flex;
`;

export const FilterSelectBody = styled.ul<{ isShowSelectOptions: boolean }>`
  margin: 10px 0 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 100%;
  display: ${(props) => (props.isShowSelectOptions ? 'block' : 'none')};
  width: 100%;
  cursor: pointer;
  background: #fff;
  box-shadow: 0px 0px 40px rgba(135, 124, 202, 0.3);
  border-radius: 10px;
`;

export const FilterSelectItem = styled.li`
  padding: 10px 15px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #1e2123;
  &:hover {
    background: #f8f8f8;
  }
`;
