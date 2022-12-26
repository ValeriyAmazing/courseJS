'use strict';

//////////////////////////////////////////////////
// Преобразование И Проверка Чисел

// console.log(10 === 10.0);

// // 10 - 0-9; 1 / 10 = 0.1; 10 / 3 = 3.33333333
// // 2 - 0, 1
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// // Converting strings to numbers
// console.log(Number('11'));
// console.log(+'11');
// console.log('11');

// // Parsing numbers from string
// console.log(Number.parseInt('20%', 10));
// console.log(Number.parseInt('1011%', 2)); // 1011 -> 1 * 2 ** 0 + 1 * 2 ** 1 + 0 * 2 ** 2 + 1 * 2 ** 3 -> 1 + 2 + 0 + 8 -> 11
// console.log(Number.parseInt('s20', 10));
// console.log(Number.parseFloat('9.7kg'));
// console.log(Number.parseInt('9.7kg'));
// console.log(parseInt('9.7kg'));

// // Other methods from Number namespace
// console.log(Number.isNaN(111));
// console.log(Number.isNaN('111'));
// console.log(Number.isNaN(Number.parseInt('s20', 10)));
// console.log(+'20s');
// console.log(Number.isNaN(+'20s'));
// console.log(11 / 0);
// console.log(Number.isNaN(11 / 0));

// console.log('-------------');

// // Check if the value is finite number
// console.log(Number.isFinite(111));
// console.log(Number.isFinite('111'));
// console.log(Number.isFinite('111%'));
// console.log(Number.isFinite(+'111$'));
// console.log(Number.isFinite(11 / 0));

//////////////////////////////////////////////////
// Работа с Math

// console.log(Math.sqrt(9));
// console.log(9 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(3, 55, 66, 44, 31, 2, 9));
// console.log(Math.max(3, '55', '66', 44, 31, 2, 9));
// console.log(Math.max(3, '55%', '66%', 44, 31, 2, 9));
// console.log(Math.min(3, 55, 66, 44, 31, 2, 9));

// console.log(Math.PI);
// console.log(Math.PI * Number.parseInt('20px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// console.log(Math.trunc(1.99));

// console.log(Math.round(1.99));
// console.log(Math.round(1.39));

// console.log(Math.ceil(1.99));
// console.log(Math.ceil(1.39));

// console.log(Math.floor('1.99'));
// console.log(Math.floor(1.39));

// console.log(Math.trunc(-1.11));
// console.log(Math.floor(-1.11));

// console.log(Math.PI);
// console.log(Math.PI.toFixed(2));
// console.log(+(1.34567).toFixed(2));

//////////////////////////////////////////////////
// Оператор Остаток

// console.log(7 % 3); // 7 = 3 * 2 + 1
// console.log(7 % 4); // 7 = 4 * 1 + 3

// console.log(8 % 2);
// console.log(108 % 2);
// console.log(8564 % 2);

// console.log(9 % 2);
// console.log(89 % 2);
// console.log(881 % 2);

// const isNumberOdd = x => x % 2 !== 0;
// console.log(isNumberOdd(5));
// console.log(isNumberOdd(7));
// console.log(isNumberOdd(6));
// console.log(isNumberOdd(10));

//////////////////////////////////////////////////
// BigInt
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(2 ** 53 + 0);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);

// console.log(43223455244520245894325842234543n);
// console.log(BigInt('43223455244520245894325842234543'));

// console.log(
//   43223455244520245894325842234543n + 43223455244520245894325842234543n
// );
// console.log(
//   43223455244520245894325842234543n - 43223455244520245894325842234543n
// );
// console.log(
//   43223455244520245894325842234543n * 43223455244520245894325842234543n
// );
// console.log(
//   43223455244520245894325842234543n / 43223455244520245894325842234543n
// );
// // console.log(
// //   43223455244520245894325842234543n ** 43223455244520245894325842234543n
// // );
// console.log(43223455244520245894325842234543n ** 10n);

// const bigNumber = 43223455244520245894325842234543n;
// const regularNumber = 189;

// // console.log(Math.pow(bigNumber, 2));

// console.log(bigNumber * BigInt(regularNumber));

// console.log(43223455244520245894325842234543n > 123);
// console.log(123n === 123);
// console.log(typeof 123n);
// console.log(typeof 123);
// console.log(123n == 123);
// console.log(123n == '123');

// console.log(bigNumber + ' это ОЧЕНЬ большое число!');

// console.log(5 / 3);
// console.log(5n / 3n);

//////////////////////////////////////////////////
// Работа С Датами

// Создание дат

// const now = new Date();
// console.log(now);

// const someDateString = 'Oct 12 2021 11:35:43';
// const someDate = new Date(someDateString);
// console.log(someDate);
// console.log(new Date('Dec 31 2021'));

// const account1 = {
//   userName: 'Cecil Ireland',
//   transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
//   interest: 1.5,
//   pin: 1111,
//   transactionsDates: [
//     '2020-10-02T14:43:31.074Z',
//     '2020-10-29T11:24:19.761Z',
//     '2020-11-15T10:45:23.907Z',
//     '2021-01-22T12:17:46.255Z',
//     '2021-02-12T15:14:06.486Z',
//     '2021-03-09T11:42:26.371Z',
//     '2021-05-21T07:43:59.331Z',
//     '2021-06-22T15:21:20.814Z',
//   ],
//   currency: 'USD',
//   locale: 'en-US',
// };
// console.log(new Date(account1.transactionsDates[0]));
// console.log(new Date(2222, 1, 13, 11, 28, 59));
// console.log(new Date(2222, 0, 32));

// // Unix time started Jan 1 1970
// console.log(new Date(0));
// console.log(new Date(1 * 24 * 60 * 60 * 1000));
// console.log(new Date(7 * 24 * 60 * 60 * 1000));

// Работа С Датами При помощи Методов

// const futureDate = new Date(2222, 1, 13, 11, 28, 59);
// console.log(futureDate);
// console.log(futureDate.getFullYear());
// console.log(futureDate.getMonth());
// console.log(futureDate.getDate());
// console.log(futureDate.getDay());
// console.log(futureDate.getHours());
// console.log(futureDate.getMinutes());
// console.log(futureDate.getSeconds());
// console.log(futureDate.toISOString());
// console.log(futureDate.getTime());
// console.log(new Date(7956091739000));
// console.log(Date.now());

// futureDate.setFullYear(2223);
// console.log(futureDate);

//////////////////////////////////////////////////
// Операции С Датами

// const futureDate = new Date(2222, 1, 13, 11, 28, 59);
// console.log(Number(futureDate));
// console.log(+futureDate);
// console.log(-futureDate);

// const getDaysBetween2Dates = (date1, date2) =>
//   Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

// const days = getDaysBetween2Dates(new Date(2021, 9, 12), new Date(2021, 9, 1));
// console.log(days);

//////////////////////////////////////////////////
// Интернационализация Чисел

// const a = 325458478.21;

// const options = {
//   style: 'currency',
//   unit: 'celsius',
//   currency: 'EUR',
// };

// console.log('US', new Intl.NumberFormat('en-US', options).format(a));
// console.log('Ukraine', new Intl.NumberFormat('uk-UA', options).format(a));
// console.log('Russia', new Intl.NumberFormat('ru-RU', options).format(a));
// console.log('Germany', new Intl.NumberFormat('de-DE', options).format(a));
// console.log('Syria', new Intl.NumberFormat('ar-SY', options).format(a));

//////////////////////////////////////////////////
// Таймеры

// // setTimeout()
// const ingridients = ['Лосось', ''];
// const sushiTimer = setTimeout(
//   (ingrid1, ingrid2) =>
//     console.log(`Ваши суши доставлены! Ингридиенты: ${ingrid1}, ${ingrid2}`),
//   3000,
//   ...ingridients
// );
// console.log('Ожидание...');

// if (ingridients.includes('Тунец')) clearTimeout(sushiTimer);

// // setInterval()
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 3000);
