import { Filter, FilterShot, FilterItem } from './style';
import { FilterSelectComponent } from './FilterSelect/FilterSelectComponent';
import { useEffect } from 'react';

interface FilterProps {
  activeFilter: string;
  allSelectsFilter: string[];
}

interface Obj {
  city: string;
  apartaments: string;
  cotteges: string;
  avto: string;
  suans: string;
}

const selectLabel: Obj = {
  city: 'Город',
  apartaments: 'Комнаты',
  cotteges: 'Комнаты',
  suans: 'Кол-во мест',
  avto: 'Марка',
};

export const FilterComponent = ({
  activeFilter,
  allSelectsFilter,
}: FilterProps) => {
  return (
    <Filter>
      <FilterShot activeFilter={activeFilter}>
        {allSelectsFilter.map((select, index) => {
          const labelValue = selectLabel[select as keyof typeof selectLabel];

          return (
            <FilterItem key={index}>
              <label>{labelValue}</label>
              <FilterSelectComponent selectName={select} />
            </FilterItem>
          );
        })}
        <FilterItem>
          <label>Цена за сутки (BYN)</label>
          <FilterSelectComponent selectName={'city'} />
        </FilterItem>
        <FilterItem>asdas</FilterItem>
      </FilterShot>
    </Filter>
  );
};
