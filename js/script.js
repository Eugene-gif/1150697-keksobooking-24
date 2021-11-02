import {
  TITLE, PRICE, TYPES, ROOMS, GUESTS,
  CHEKIN, CHECKOUT, FEATURES, DESCRIPTION, PHOTOS
} from './data.js';

function getRandomPositiveInteger(a1, b1) {
  const lower = Math.ceil(Math.min(Math.abs(a1), Math.abs(b1)));
  const upper = Math.floor(Math.max(Math.abs(a1), Math.abs(b1)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

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
