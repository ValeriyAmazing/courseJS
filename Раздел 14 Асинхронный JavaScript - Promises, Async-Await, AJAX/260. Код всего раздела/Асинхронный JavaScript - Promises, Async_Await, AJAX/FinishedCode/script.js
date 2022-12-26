'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const displayCountry = function (data, className = '') {
  const currencies = data.currencies;
  const currensyName = Object.values(currencies)[0].name;
  const currensySymbol = Object.values(currencies)[0].symbol;

  const languages = data.languages;
  const firstLanguage = Object.values(languages)[0];

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
        +data.population / 1000000
      ).toFixed(1)} миллионов</p>
      <p class="country__row"><span>🗣️</span>${firstLanguage}</p>
      <p class="country__row"><span>💰</span>${currensySymbol} ${currensyName}</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const displayError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

// const getCoutnryAndBorderCountries = function (countryName) {
//   // Вызов AJAX для получения данных о стране
//   const request1 = new XMLHttpRequest();
//   request1.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//   request1.send();

//   request1.addEventListener('load', function () {
//     const [data1] = JSON.parse(this.responseText);
//     console.log(data1);

//     // Отображение страны
//     displayCountry(data1);

//     // Получаем первую соседнюю страну
//     const [firstNeighbour] = data1.borders;

//     if (!firstNeighbour) return;

//     // Вызов AJAX для получения данных о первой соседней стране
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://restcountries.com/v3.1/alpha/${firstNeighbour}`
//     );
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       displayCountry(data2, 'neighbour');
//     });
//   });
// };

const getDataAndConvertToJSON = function (
  url,
  errorMessage = 'Что-то пошло не так 🧐.'
) {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error(`${errorMessage} Ошибка ${response.status}`);
    return response.json();
  });
};

// const getCoutnryData = function (countryName) {
//   getDataAndConvertToJSON(
//     `https://restcountries.com/v3.1/name/${countryName}`,
//     'Страна не найдена.'
//   )
//     .then(data => {
//       displayCountry(data[0]);

//       if (!data[0].borders) throw new Error('Соседних стран не найдено!');

//       const firstNeighbour = data[0].borders[0];

//       return getDataAndConvertToJSON(
//         `https://restcountries.com/v3.1/alpha/${firstNeighbour}`,
//         'Страна не найдена.'
//       );
//     })
//     .then(data => displayCountry(data[0], 'neighbour'))
//     .catch(e => {
//       console.error(`${e} 🧐`);
//       displayError(`Что-то пошло не так 🧐: ${e.message} Попробуйте ещё раз!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCoutnryData('ukraine');
// });

////////////////////////////////////////////////////

// const getCoutnryData = function (countryName) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//   request.send();
//   // console.log(request.responseText);
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const currencies = data.currencies;
//     const currensyName = Object.values(currencies)[0].name;
//     const currensySymbol = Object.values(currencies)[0].symbol;

//     const languages = data.languages;
//     const firstLanguage = Object.values(languages)[0];

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flags.svg}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} миллионов</p>
//       <p class="country__row"><span>🗣️</span>${firstLanguage}</p>
//       <p class="country__row"><span>💰</span>${currensySymbol} ${currensyName}</p>
//     </div>
//   </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCoutnryAndBorderCountries('usa');

// setTimeout(() => {
//   console.log('Прошла 1 секунда');
//   setTimeout(() => {
//     console.log('Прошло 2 секунды');
//     setTimeout(() => {
//       console.log('Прошло 3 секунды');
//       setTimeout(() => {
//         console.log('Прошло 4 секунды');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
// request.send();

// const getCoutnryData = function (countryName) {
//   fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       displayCountry(data[0]);
//     });
// };

// const getCoutnryData = function (countryName) {
//   fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Страна не найдена. Ошибка ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       displayCountry(data[0]);
//       // const firstNeighbour = data[0].borders[0];
//       const firstNeighbour = 'afasga';

//       if (!firstNeighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${firstNeighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Страна не найдена. Ошибка ${response.status}`);
//       return response.json();
//     })
//     .then(data => displayCountry(data[0], 'neighbour'))
//     .catch(e => {
//       console.error(`${e} 🧐`);
//       displayError(`Что-то пошло не так 🧐: ${e.message}. Попробуйте ещё раз!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCoutnryData('japan');

/////////////////////////////////////////////////
// Задание 1

// В этом задании вы создадите функцию displayCountryByGPS(), которая отображает страну только на основе координат GPS. Для этого вы будете использовать вторые API для геокодирования координат. Итак, в этом задании вы вы впервые будете использовать API самостоятельно.

// 1. Создайте функцию displayCountryByGPS(), которая принимает в качестве входных данных значение высоты (lat) и значение долготы (lng) (это координаты GPS, примеры приведены в тестовых данных ниже).
// 2. Выполните «обратное геокодирование» предоставленных координат. Обратное геокодирование означает преобразование координат в местоположение, такое как название города и страны. Используйте этот API для обратного геокодирования:
// https://geocode.xyz/api
// Вызов AJAX будет выполняться для URL в следующем формате:
// https://geocode.xyz/52.508,13.381?geoit=json
// Используйте Fetch API и promises, чтобы получить данные. Не используйте созданную нами функцию getDataAndConvertToJSON()!
// 3. Получив данные, выведите их в консоль, чтобы просмотреть все атрибуты, которые вы получили об указанном местоположении. Затем, используя эти данные, выведите в консоль сообщение такого вида: “You are in Rome, Italy”.
// 4. Присоедините в конце цепочки promises метод catch() и выведите сообщение об ошибках в консоль.
// 5. Эти API позволяют делать только 3 запроса в секунду. Если вы быстро перезагрузите страницу, вы получите ошибку с кодом 403. Это ошибка запроса. Помните, что в этом случае fetch() не отклоняет обещание. Поэтому создайте ошибку, чтобы отклонить обещание самостоятельно, с сообщением об ошибке, подходящим по смыслу.
// 6. Теперь нужно использовать полученные данные для отображения страны. Выберите соответствующий атрибут из результата API геокодирования и вставьте его в API о странах, которые мы использовали.
// 7. Отобразите страну и перехватите все возможные ошибки, как мы делали в прошлой лекции (вы даже можете скопировать этот код, не нужно писать его заново).

// Тестовые данные:

//               Широта  Долгота
// Координаты 1  35.756  139.256
// Координаты 2  48.857  2.358
// Координаты 3  40.708  -74.051

// const displayCountryByGPS = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(
//           `Проблема с геокодированием (ошибка ${response.status})`
//         );
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return getDataAndConvertToJSON(
//         `https://restcountries.com/v3.1/name/${data.country.toLowerCase()}`,
//         'Страна не найдена.'
//       );
//     })
//     .then(data => displayCountry(data[0]))
//     .catch(e => {
//       console.error(`${e} 🧐`);
//       displayError(`Что-то пошло не так 🧐: ${e.message} Попробуйте ещё раз!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     })

//     .catch(e => console.error(`${e.message} 🧐`));
// };

// displayCountryByGPS(35.756, 139.256);
// displayCountryByGPS(48.857, 2.358);
// displayCountryByGPS(40.708, -74.051);

///////////////////////////////////////////////
// Пример работы с циклом событий

// console.log('Начало теста');
// setTimeout(() => console.log('Таймер 0 секунд'), 0);
// Promise.resolve('Выполненное promise 1').then(result => console.log(result));
// Promise.resolve('Выполненное promise 2').then(result => {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(result);
// });
// console.log('Конец теста');

///////////////////////////////////////////////
// Создание Простого Promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Происходит розыгрыш лотереи 🪄');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('Вы ВЫИГРАЛИ! 💶');
//     } else {
//       reject(new Error('Вы ПРОИГРАЛИ! 😿'));
//     }
//   }, 3000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying (промисификация) функции setTimeout()
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(3)
//   .then(() => {
//     console.log('Длительность ожидания 3 секунды');
//     return wait(2);
//   })
//   .then(() => {
//     console.log('Длительность ожидания 2 секунды');
//   });

// setTimeout(() => {
//   console.log('Прошла 1 секунда');
//   setTimeout(() => {
//     console.log('Прошло 2 секунды');
//     setTimeout(() => {
//       console.log('Прошло 3 секунды');
//       setTimeout(() => {
//         console.log('Прошло 4 секунды');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// wait(1)
//   .then(() => {
//     console.log('Прошла 1 секунда');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('Прошла 2 секунда');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('Прошла 3 секунда');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('Прошла 4 секунда');
//     return wait(1);
//   });

// Promise.resolve('Resolved!').then(res => console.log(res));
// Promise.reject(new Error('Rejected!')).catch(e => console.error(e));

///////////////////////////////////////////////
// Промисификация API Геолокации

// const getUserPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   e => reject(e)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // getUserPosition()
// //   .then(pos => console.log(pos))
// //   .catch(e => console.error(e));

// const displayUserCountry = function () {
//   getUserPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(
//           `Проблема с геокодированием (ошибка ${response.status})`
//         );
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return getDataAndConvertToJSON(
//         `https://restcountries.com/v3.1/name/${data.country.toLowerCase()}`,
//         'Страна не найдена.'
//       );
//     })
//     .then(data => displayCountry(data[0]))
//     .catch(e => {
//       console.error(`${e} 🧐`);
//       displayError(`Что-то пошло не так 🧐: ${e.message} Попробуйте ещё раз!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     })

//     .catch(e => console.error(`${e.message} 🧐`));
// };

// displayUserCountry();

///////////////////////////////////////////////
// Задание 2
// В этом задании вам нужно будет создать функциональность загрузки изображений
// 1. Создайте функцию createImageElement(), которая принимает imagePath как входной параметр. Эта функция возвращает promise, которое создает новый HTML элемент img (используйте document.createElement ('img')) и устанавливает атрибут src для предоставленного пути к изображению.
// 2. Когда загрузка изображения будет завершена, добавьте его к элементу DOM с классом images и сделайте promise выполненным. Значение выполненного promise должно быть самим элементом img. В случае, если при загрузке изображения произошла ошибка (прослушайте событие error), отклоните обещание.
// 3. Если эта часть слишком непонятна для вас, просто просмотрите первую часть решения в следующем видео.
// 4. Произведите потребление promise, используя then(), а также добавьте обработчик ошибок.
// 5. После загрузки изображения приостановите выполнение на 2 секунды, используя функцию wait(), которую мы создали ранее.
// 6. По истечении 2 секунд спрячьте текущее изображение (установите для CSS свойства display значение none) и загрузите второе изображение (Подсказка: используйте элемент img из promise, возвращенного из createImageElement(), чтобы скрыть текущее изображение. Для этого вам понадобится глобальная переменная)
// 7. После загрузки второго изображения снова приостановите выполнение на 2 секунды.
// 8. По истечении 2 секунд спрячьте текущее изображение.
// Тестовые данные:
// Изображения в папке img. Протестируйте обработчик ошибок, указав неверный путь к изображению. Установите скорость интернета Fast 3G на вкладке Network в инструментах разработчика, иначе изображения будут загружаться слишком быстро.

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imageContainer = document.querySelector('.images');

// let currentImage;

// const createImageElement = function (imagePath) {
//   return new Promise(function (resolve, reject) {
//     const imgEl = document.createElement('img');
//     imgEl.src = imagePath;

//     imgEl.addEventListener('load', function () {
//       imageContainer.append(imgEl);
//       resolve(imgEl);
//     });

//     imgEl.addEventListener('error', function () {
//       reject(new Error('Изображение не найдено'));
//     });
//   });
// };

// createImageElement('img/image1.jpg')
//   .then(image => {
//     currentImage = image;
//     console.log('Первое изображение загружено');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImageElement('img/image2.jpg');
//   })
//   .then(image => {
//     currentImage = image;
//     console.log('Второе изображение загружено');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch(e => console.error(e));

// const getCoutnryData = function (countryName) {
//   fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Страна не найдена. Ошибка ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       displayCountry(data[0]);
//       // const firstNeighbour = data[0].borders[0];
//       const firstNeighbour = 'afasga';

//       if (!firstNeighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${firstNeighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Страна не найдена. Ошибка ${response.status}`);
//       return response.json();
//     })
//     .then(data => displayCountry(data[0], 'neighbour'))
//     .catch(e => {
//       console.error(`${e} 🧐`);
//       displayError(`Что-то пошло не так 🧐: ${e.message}. Попробуйте ещё раз!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

///////////////////////////////////////////////
// Возвращаемые Значения в Асинхронных Функциях

// const getUserPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const getCountryData = async function () {
//   try {
//     const userPosition = await getUserPosition();

//     const { latitude: lat, longitude: lng } = userPosition.coords;

//     const geocodingResponse = await fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json`
//     );

//     if (!geocodingResponse.ok)
//       throw new Error('Проблема с извлечением местоположения');

//     const geocodingData = await geocodingResponse.json();

//     const response = await fetch(
//       `https://restcountries.com/v3.1/name/${geocodingData.country.toLowerCase()}`
//     );

//     if (!response.ok) throw new Error('Проблема с получением страны');

//     const data = await response.json();
//     displayCountry(data[0]);
//     return `You are in ${geocodingData.city}, ${geocodingData.country}`;
//   } catch (e) {
//     console.error(`${e} 🧐`);
//     displayError(`Что-то пошло не так 🧐 ${e.message}`);

//     // Отклоняем promise, возвращаемое из асинхронной функции
//     throw e;
//   }
// };

// console.log('1 Будем получать местоположение');
// // const place = getCountryData();
// // console.log(place);
// // getCountryData()
// //   .then(place => console.log(`2 ${place}`))
// //   .catch(e => console.error(`2 ${e.message} 🧐`))
// //   .finally(() => console.log('3 Получили местоположение'));

// (async function () {
//   try {
//     const place = await getCountryData();
//     console.log(`2 ${place}`);
//   } catch (e) {
//     console.error(`2 ${e.message} 🧐`);
//   }
//   console.log('3 Получили местоположение');
// })();

///////////////////////////////////////////////
// Запуск Нескольких Promise Параллельно

// const print3CountriesCapitals = async function (counry1, counry2, counry3) {
//   try {
//     // const [country1Data] = await getDataAndConvertToJSON(
//     //   `https://restcountries.com/v3.1/name/${counry1}`
//     // );
//     // const [country2Data] = await getDataAndConvertToJSON(
//     //   `https://restcountries.com/v3.1/name/${counry2}`
//     // );
//     // const [country3Data] = await getDataAndConvertToJSON(
//     //   `https://restcountries.com/v3.1/name/${counry3}`
//     // );

//     // console.log([
//     //   country1Data.capital,
//     //   country2Data.capital,
//     //   country3Data.capital,
//     // ]);

//     const countriesData = await Promise.all([
//       getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${counry1}`),
//       getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${counry2}`),
//       getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${counry3}`),
//     ]);

//     console.log(countriesData.map(countryData => countryData[0].capital));
//   } catch (e) {
//     console.error(e);
//   }
// };

// print3CountriesCapitals('ukraine', 'russia', 'canada');

///////////////////////////////////////////////
// race, allSettled & any

// Promise.race()

// (async function () {
//   const response = await Promise.race([
//     getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/france`),
//     getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/italy`),
//     getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/spain`),
//   ]);
//   console.log(response[0]);
// })();

// const timeout = function (seconds) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Запрос превысил допустимое время'));
//     }, seconds * 1000);
//   });
// };

// Promise.race([
//   getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/spain`),
//   timeout(3),
// ])
//   .then(data => console.log(data[0]))
//   .catch(e => console.error(e));

// Promise.allSettled()
// Promise.allSettled([
//   Promise.resolve('Выполнено!'),
//   Promise.reject('Отклонено!'),
//   Promise.resolve('Выполнено!'),
// ]).then(data => console.log(data));

// Promise.all([
//   Promise.resolve('Выполнено!'),
//   Promise.reject('Отклонено!'),
//   Promise.resolve('Выполнено!'),
// ])
//   .then(data => console.log(data))
//   .catch(e => console.error(e));

// Promise.any() ES2021
// Promise.any([
//   Promise.reject('Отклонено!'),
//   Promise.resolve('1 Выполнено!'),
//   Promise.resolve('2 Выполнено!'),
// ])
//   .then(data => console.log(data))
//   .catch(e => console.error(e));

///////////////////////////////////////////////
// Задание 3

// 1. Создайте асинхронную функцию loadAndWait(), которая повторяет функциональность из Задания 2, но на этот раз с использованием async / await (только та часть, где promise потребляется, повторно используйте ранее созданную функцию createImageElement())
// 2. Сравните эти 2 версии, подумайте о различиях и выберите то, что вам больше нравится.
// 3. Не забудьте протестировать обработчик ошибок и установить скорость сети на Fast3G на вкладке Network в инструментах разработчика.
// 4. Создайте асинхронную функцию loadAllImages(), которая принимает массив путей к изображениям imagePathsArray.
// 5. Используйте map() для перебора элементов массива, чтобы загрузить все изображения с помощью функции createImageElement() (получившийся массив назовите images).
// 6. Ознакомьтесь с массивом images в консоли! Это похоже на то, что вы ожидали?
// 7. Используйте функцию комбинирования для фактического получения изображений из массива.
// 8. Добавьте класс parallel для всех изображений (в нём есть некоторые стили CSS).
// Тестовые данные:
// ['img / image1.jpg', 'img / image2.jpg', 'img / image3.jpg']
// Для теста отключите функцию loadAndWait().

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imageContainer = document.querySelector('.images');

// let currentImage;

const createImageElement = function (imagePath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement('img');
    imgEl.src = imagePath;

    imgEl.addEventListener('load', function () {
      imageContainer.append(imgEl);
      resolve(imgEl);
    });

    imgEl.addEventListener('error', function () {
      reject(new Error('Изображение не найдено'));
    });
  });
};

// createImageElement('img/image1.jpg')
//   .then(image => {
//     currentImage = image;
//     console.log('Первое изображение загружено');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImageElement('img/image2.jpg');
//   })
//   .then(image => {
//     currentImage = image;
//     console.log('Второе изображение загружено');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch(e => console.error(e));

const loadAndWait = async function () {
  try {
    // Загрузка первого изображения
    let image = await createImageElement('img/image1.jpg');
    console.log('Первое изображение загружено');
    await wait(2);
    image.style.display = 'none';

    // Загрузка второго изображения
    image = await createImageElement('img/image2.jpg');
    console.log('Второе изображение загружено');
    await wait(2);
    image.style.display = 'none';
  } catch (e) {
    console.error(e);
  }
};

// loadAndWait();

const loadAllImages = async function (imagePathsArray) {
  try {
    const images = imagePathsArray.map(
      async imagePath => await createImageElement(imagePath)
    );
    console.log(images);

    const imageElements = await Promise.all(images);
    console.log(imageElements);
    imageElements.forEach(img => img.classList.add('parallel'));
  } catch (e) {
    console.error(e);
  }
};

loadAllImages(['img/image1.jpg', 'img/image2.jpg', 'img/image3.jpg']);
