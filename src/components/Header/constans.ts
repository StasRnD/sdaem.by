import markerMap from '../../images/marker.svg';

export interface NavPagesItem {
  text: string;
  image?: string;
  imageAlt?: string;
  redirect: string;
}

export const navPagesItems: NavPagesItem[] = [
  {
    text: 'Главная',
    redirect: '',
  },
  {
    text: 'Новости',
    redirect: 'news',
  },
  {
    text: 'Размещение и тарифы ',
    redirect: 'tarif',
  },
  {
    text: 'Объявления на карте',
    redirect: 'maps',
    image: markerMap,
    imageAlt: 'Картинка маркера карты',
  },
  {
    text: 'Контакты',
    redirect: 'contacts',
  },
];

export const navServicesItems: NavPagesItem[] = [
  {
    text: 'Квартиры на сутки',
    redirect: 'apartaments',
  },
  {
    text: 'Коттеджи и усадьбы',
    redirect: 'cotteges',
  },
  {
    text: 'Бани и Сауны',
    redirect: 'suans',
  },
  {
    text: 'Авто напрокат',
    redirect: 'avto',
  },
];
