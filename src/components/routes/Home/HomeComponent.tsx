import { Home, HomeFilter, HomeTitle } from './style';
import { FilterComponent } from '../../Common/Filter/FilterComponent';
import { HomeFilterComponent } from './HomeFilter/HomeFilterComponent';

export const HomeComponent = () => {
  return (
    <Home>
      <HomeFilter>
        <HomeTitle>
          Sdaem.by - у нас живут <span>ваши объявления</span>
        </HomeTitle>
        <HomeFilterComponent></HomeFilterComponent>
      </HomeFilter>
    </Home>
  );
};
