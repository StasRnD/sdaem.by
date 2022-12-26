import { ButtonValue } from './constans';
import { FilterComponent } from '../../../Common/Filter/FilterComponent';
import { HomeFilter, FilterButtonsList, FilterButton } from './style';
import { useState } from 'react';

export const HomeFilterComponent = () => {
  const [activeFilter, setActiveFilter] = useState('apartaments');

  const allSelectsFilter = ['city', activeFilter];

  return (
    <HomeFilter>
      <FilterButtonsList>
        {ButtonValue.map((button, index) => {
          return (
            <FilterButton
              key={index}
              value={button.value}
              activeFilter={activeFilter}
              onClick={(evt) => setActiveFilter(evt.currentTarget.value)}
            >
              {button.text}
            </FilterButton>
          );
        })}
      </FilterButtonsList>
      <FilterComponent
        allSelectsFilter={allSelectsFilter}
        activeFilter={activeFilter}
      ></FilterComponent>
    </HomeFilter>
  );
};
