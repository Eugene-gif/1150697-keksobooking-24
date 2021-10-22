const TITLE = ['Какой-то заголовок 1', 'Какой-то заголовок 2', 'Какой-то заголовок 3', 'Какой-то заголовок 4', 'Какой-то заголовок 5'];
const PRICE = [500, 1000, 1500, 2000, 2500, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 11000];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const ROOMS = [1, 2, 3, 4, 5];
const GUESTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const CHEKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['Описание помещения 1', 'Описание помещения 2', 'Описание помещения 3', 'Описание помещения 4', 'Описание помещения 5', 'Описание помещения 6', 'Описание помещения 7', 'Описание помещения 8'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

function getRandomPositiveInteger(a1, b1) {
  const lower = Math.ceil(Math.min(Math.abs(a1), Math.abs(b1)));
  const upper = Math.floor(Math.max(Math.abs(a1), Math.abs(b1)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
getRandomPositiveInteger(1, 10);

const getRandomSliceFromArray = (array) => {
  const random1 = getRandomPositiveInteger(0, array.length - 1);
  const random2 = getRandomPositiveInteger(0, array.length - 1);
  const min = Math.min(random1, random2);
  const max = Math.max(random1, random2);
  return array.slice(min, max);
};

const getRandomElementFromArray = (array) => {
  const index = getRandomPositiveInteger(0, array.length - 1);
  return array[index];
};

function getLocation(a1, b1, digits = 1) {
  const lower = Math.min(Math.abs(a1), Math.abs(b1));
  const upper = Math.max(Math.abs(a1), Math.abs(b1));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

function createAd(idx) {
  const location = {
    lat: getLocation(35.65000, 35.70000, 5),
    lng: getLocation(139.70000, 139.80000, 5),
  };

  return {
    author: {
      avatar: `../img/avatars/user${(++idx).toString().padStart(2, '0')}.png`,
    },
    offer: {
      title: getRandomElementFromArray(TITLE),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomElementFromArray(PRICE),
      type: getRandomElementFromArray(TYPES),
      rooms: getRandomElementFromArray(ROOMS),
      guests: getRandomElementFromArray(GUESTS),
      checkin: getRandomElementFromArray(CHEKIN),
      checkout: getRandomElementFromArray(CHECKOUT),
      features: getRandomSliceFromArray(FEATURES),
      description: getRandomElementFromArray(DESCRIPTION),
      photos: getRandomSliceFromArray(PHOTOS),
    },
    location: {
      lat: location.lat,
      lng: location.lng,
    },
  };
}

// eslint-disable-next-line no-unused-vars
const ads = new Array(10).fill('').map((item, idx) => createAd(idx));
