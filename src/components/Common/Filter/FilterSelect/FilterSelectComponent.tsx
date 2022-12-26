import { useState, useEffect } from 'react';
import {
  FilterSelect,
  FilterSelectHeader,
  FilterSelectCurrent,
  FilterSelectIcon,
  FilterSelectBody,
  FilterSelectItem,
} from './style';

interface SelectOptionsProps {
  city: string[];
  apartaments: string[];
  avto: string[];
  cotteges: string[];
  suans: string[];
}

const selectsOptions: SelectOptionsProps = {
  city: ['Минск', 'Гродно', 'Гомель', 'Брест', 'Витебск', 'Могилев'],
  apartaments: ['1 комн', '2 комн', '3 комн', '4 комн', '5 комн'],
  cotteges: ['1 комн', '2 комн', '3 комн', '4 комн', '5 комн'],
  suans: ['2 места', '4 места', '6 мест', '8 мест'],
  avto: ['Honda', 'Audi', 'Mersedec'],
};

interface FilterSelectProps {
  selectName: string;
}

export const FilterSelectComponent = ({ selectName }: FilterSelectProps) => {
  useEffect(() => {
    setSelectValue('Выберете');
  }, [selectName]);
  const [isShowSelectOptions, setIsShowSelectOptions] =
    useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string | null>('Выберете');

  const toogleShowSelectOptions = () => {
    setIsShowSelectOptions(!isShowSelectOptions);
  };
  const optionValues =
    selectsOptions[selectName as keyof typeof selectsOptions];

  const choiseSelectOption: React.MouseEventHandler<HTMLLIElement> = (evt) => {
    setSelectValue(evt.currentTarget.textContent);
    toogleShowSelectOptions();
  };

  return (
    <FilterSelect>
      <FilterSelectHeader onClick={toogleShowSelectOptions}>
        <FilterSelectCurrent>{selectValue}</FilterSelectCurrent>
        <FilterSelectIcon></FilterSelectIcon>
      </FilterSelectHeader>
      <FilterSelectBody isShowSelectOptions={isShowSelectOptions}>
        {optionValues.map((option, index) => {
          return (
            <FilterSelectItem
              key={index}
              value={option}
              onClick={choiseSelectOption}
            >
              {option}
            </FilterSelectItem>
          );
        })}
      </FilterSelectBody>
    </FilterSelect>
  );
};
