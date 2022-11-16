import {
  randLine,
  randImg,
  randBoolean,
  randEmail,
  randPhoneNumber,
  randNumber,
  randFirstName,
  randBetweenDate,
} from '@ngneat/falso';

const news = Array.from(Array(50).keys()).map((el, index) => ({
  id: index,
  text: randLine({ lineCount: 10 }),
  title: randLine({ lineCount: 1 }),
  image: randImg(),
  date: randBetweenDate({ from: new Date('10/07/2018'), to: new Date() }),
}));

const apartaments = Array.from(Array(200).keys()).map((el, index) => ({
  id: index,
  inderground: [
    'Уручье',
    'Борисовский тракт',
    'Восток',
    'Московская',
    'Парк Челюскинцев',
    'Акаде́мия наук',
    'Площадь Якуба Коласа',
    'Площадь Победы',
  ][randNumber({ min: 0, max: 8 })],
  rooms: randNumber({ min: 1, max: 5 }),
  district: [
    'Заводской',
    'Ленинский',
    'Московский',
    'Октябрьский',
    'Партизанский',
    'Первомайский',
    'Советский',
    'Фрунзенский',
    'Центральный',
  ][randNumber({ min: 0, max: 8 })],
  price: randNumber({ min: 30, max: 250 }),
  sleepingPlaces: randNumber({ min: 2, max: 4 }),
  gasStove: randBoolean(),
  oven: randBoolean(),
  coffeeMaker: randBoolean(),
  microwave: randBoolean(),
  tableware: randBoolean(),
  dishwasher: randBoolean(),
  address: {
    street: [
      'Пушкина',
      'Ленина',
      'Виленская',
      'Советская',
      'Притыцкого',
      'Комсомольская',
      'Толстого',
      'Замковая',
      'Суворова',
    ][randNumber({ min: 0, max: 8 })],
    houseNumber: randNumber({ min: 1, max: 200 }),
    city: ['Минск', 'Витебск', 'Гродно', 'Гомель', 'Брест', 'Могилев'][
      randNumber({ min: 0, max: 5 })
    ],
  },
  owner: {
    name: randFirstName(),
    telephone: randPhoneNumber(),
    email: randEmail(),
  },
  areaApartment: randNumber({ min: 40, max: 180 }),
}));

const cars = Array.from(Array(200).keys()).map((el, index) => ({
  id: index,
  city: ['Минск', 'Витебск', 'Гродно', 'Гомель', 'Брест', 'Могилев'][
    randNumber({ min: 0, max: 5 })
  ],
  owner: {
    name: randFirstName(),
    telephone: randPhoneNumber(),
    email: randEmail(),
  },
  color: [
    'синий',
    'красный',
    'голубой',
    'белый',
    'черный',
    'фиолетовый',
    'хаки',
    'коричневый',
  ][randNumber({ min: 0, max: 7 })],
  brand: [
    'Honda',
    'Lexus',
    'Porsche',
    'Opel',
    'Rover',
    'Kia',
    'Geely',
    'Daewoo',
  ][randNumber({ min: 0, max: 7 })],
  yearRelease: [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
  ][randNumber({ min: 0, max: 9 })],
  price: randNumber({ min: 300000, max: 2500000, precision: 1000 }),
  bodyTypeCar: ['хэтчбек', 'седан', 'универсал', 'пикап'][
    randNumber({ min: 0, max: 3 })
  ],
  engineType: ['газ', 'бензин'][randNumber({ min: 0, max: 1 })],
  carDrive: ['полный', 'передний', 'задний'][randNumber({ min: 0, max: 2 })],
  engineСapacity: randNumber({ min: 0.5, max: 7 }),
}));

// export const api = {
//   news,
// };
