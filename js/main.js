// eslint-disable-next-line no-unused-vars
const author = {
  avatar: '../img/avatars/user01.png',
};
// eslint-disable-next-line no-unused-vars
const offer = {
  title: 'Заголовок какого-то предложения 1',
  address: 'location.lat, {{location.lng}}',
  price: 500,
  type: 'house',
  rooms: 2,
  guests: 2,
  checkin: '12:00',
  checkout: '14:00',
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  description: 'Описание выбранного помещения на сайте Keksobooking',
  photos: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
};
// eslint-disable-next-line id-length
const getLocation = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

// eslint-disable-next-line no-unused-vars
const location = {
  lat: getLocation(35.65000, 35.70000, 5),
  lng: getLocation(139.70000, 139.80000, 5),
};

// eslint-disable-next-line id-length
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
getRandomPositiveInteger(1, 10);

