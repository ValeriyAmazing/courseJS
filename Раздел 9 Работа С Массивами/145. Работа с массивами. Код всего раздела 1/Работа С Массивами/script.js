'use strict';

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['CNY', 'Chinese yuan'],
// ]);

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

////////////////////////////////////////////////
// Простые Методы Массивов

// let letters = ['a', 'b', 'c', 'd', 'e', 'f'];

// slice()

// console.log(letters.slice(1));
// console.log(letters.slice(1, 4));
// console.log(letters.slice(-1));
// console.log(letters.slice(-3));
// console.log(letters.slice(-3, -1));
// console.log(letters.slice(2, -1));
// console.log(letters.slice());
// console.log([...letters]);

// splice()

// console.log(letters.splice(1));
// letters.splice(-1);
// letters.splice(1, 3);

// let letters1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// let letters2 = ['g', 'h', 'i'];

// reverse()

// console.log(letters.reverse());

// concat()

// const letters = letters1.concat(letters2);
// console.log(letters);
// console.log([...letters1, ...letters2]);

// join()

// console.log(letters.join(', '));

////////////////////////////////////////////////
// Итерация Массивов С Помощью Цикла forEach

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// for (const transaction of transactions) {
//   if (transaction > 0) {
//     console.log(`${transaction} was deposited`);
//   } else {
//     console.log(`${Math.abs(transaction)} was withdrew`);
//   }
// }

// for (const [i, transaction] of transactions.entries()) {
//   if (transaction > 0) {
//     console.log(`${transaction} was deposited`);
//     console.log(i);
//   } else {
//     console.log(`${Math.abs(transaction)} was withdrew`);
//     console.log(i);
//   }
// }

// console.log('------------------------');

// transactions.forEach(function (transaction, index /*, array*/) {
//   if (transaction > 0) {
//     console.log(`Transaction № ${index + 1}: ${transaction} was deposited`);
//   } else {
//     console.log(
//       `Transaction № ${index + 1}: ${Math.abs(transaction)} was withdrew`
//     );
//   }
// });

////////////////////////////////////////////////
// forEach С Map И Set

// Map

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['CNY', 'Chinese yuan'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const uniqueCurrencies = new Set(['USD', 'EUR', 'USD', 'CNY', 'CNY']);
// console.log(uniqueCurrencies);
// uniqueCurrencies.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
//   console.log(set);
// });

////////////////////////////////////////////////
// Задание 1

// Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.
// Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.
// Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:
// 1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! Поэтому создайте неглубокую (shallow) копию массива Жени и удалите возраст собак из этого скопированного массива (потому что это плохая практика изменять параметры функции).
// 2. Создайте массив с данными Жени (исправленными) и Юли.
// 3. Для каждой оставшейся кошки выведите в консоль,  если она взрослая: ("Кошка № 1 взрослая, ей 6 лет "), если котёнок (" Кошка № 2 ещё котёнок ")
// 4. Вызовите функцию для обоих наборов тестовых данных.
// Тестовые данные:
// Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
// Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
// Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
// Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]

// const catsJaneData1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
// const catsJuliaData1 = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
// const catsJaneData2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
// const catsJuliaData2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];

// const verifyCats = function (catsJane, catsJulia) {
//   const catsJaneCorrect = catsJane.slice();
//   catsJaneCorrect.splice(0, 1);
//   catsJaneCorrect.splice(-1);
//   // console.log(catsJaneCorrect);

//   const cats = catsJaneCorrect.concat(catsJulia);
//   // console.log(cats);

//   cats.forEach(function (catAge, index) {
//     if (catAge >= 2) {
//       console.log(`Кошка № ${index + 1} взрослая, ей ${catAge} лет`);
//     } else {
//       console.log(`Кошка № ${index + 1} ещё котёнок`);
//     }
//   });
// };

// verifyCats(catsJaneData1, catsJuliaData1);
// console.log('------------------------');
// verifyCats(catsJaneData2, catsJuliaData2);

////////////////////////////////////////////////
// Метод map()

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// const usdToEuro = 0.86;

// // const transactionsEuro = transactions.map(function (trans) {
// //   return trans * usdToEuro;
// // });

// const transactionsEuro = transactions.map(trans => trans * usdToEuro);

// console.log(transactions);
// console.log(transactionsEuro);

// const transactionsEuro1 = [];

// for (const trans of transactions) {
//   transactionsEuro1.push(trans * usdToEuro);
// }

// console.log(transactionsEuro1);

// // const transactionDescriptions = transactions.map(
// //   (transaction, index, array) => {
// //     let description = '';

// //     if (transaction > 0) {
// //       description = `Transaction № ${index + 1}: ${transaction} was deposited`;
// //     } else {
// //       description = `Transaction № ${index + 1}: ${Math.abs(
// //         transaction
// //       )} was withdrew`;
// //     }

// //     return description;
// //   }
// // );

// const transactionDescriptions = transactions.map(
//   (transaction, index) =>
//     `Transaction № ${index + 1}: ${Math.abs(transaction)} was ${
//       transaction > 0 ? 'deposited' : 'withdrew'
//     }`
// );

// console.log(transactionDescriptions);

////////////////////////////////////////////////
// Метод filter()

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// const withdrawals = transactions.filter(function (trans) {
//   return trans < 0;
// });

// console.log(withdrawals);

// const withdrawals1 = [];

// for (const trans of transactions) {
//   if (trans < 0) {
//     withdrawals1.push(trans);
//   }
// }

// console.log(withdrawals1);

// const deposites = transactions.filter(trans => trans > 0);

// console.log(deposites);

////////////////////////////////////////////////
// Метод reduce()

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// // const balance = transactions.reduce(function (acc, item, index, arr) {
// //   console.log(acc);
// //   return acc + item;
// // }, 0);

// const balance = transactions.reduce((acc, item) => acc + item, 0);
// console.log('---------------');
// console.log(balance);

// let sum = 0;
// for (const trans of transactions) {
//   sum += trans;
// }
// console.log(sum);

// // Get minimum value of transactions

// const min = transactions.reduce(
//   (acc, trans) => (acc < trans ? acc : trans),
//   transactions[0]
// );
// console.log(min);

////////////////////////////////////////////////
// Задание 2

// Вернемся к исследованию кошек Женей и Юлей. На этот раз они хотят преобразовать возраст кошек в человеческий возраст и вычислить средний возраст кошек в своем исследовании.
// Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:

// 1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7.
// 2. Исключает всех кошек младше 18 человеческих лет.
// 3. Возвращает средний человеческий возраст для всех взрослых кошек.

// Вызовите функцию для обоих наборов тестовых данных.
// Тестовые данные:
// 1: [7, 3, 2, 4, 1, 15, 8, 1, 9, 2]
// 2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]

// const getAverageHumanAge = function (catAges) {
//   const humanAges = catAges.map(catAge =>
//     catAge <= 2 ? catAge * 10 : catAge * 7
//   );
//   const adultCats = humanAges.filter(humanAge => humanAge >= 18);
//   const averageHumanAge =
//     adultCats.reduce((acc, catAge) => acc + catAge, 0) / adultCats.length;
//   return averageHumanAge;
// };

// const averageHumanAge1 = getAverageHumanAge([7, 3, 2, 4, 1, 15, 8, 1, 9, 2]);
// const averageHumanAge2 = getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]);
// console.log(averageHumanAge1);
// console.log(averageHumanAge2);

////////////////////////////////////////////////
// Method Chaining (Цепь Вызовов Методов)

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// const totalWithdrawalsEuro = transactions
//   .filter(trans => trans < 0)
//   .map((trans, index, arr) => {
//     // console.log(arr);
//     return trans * 0.86;
//   })
//   // .map(trans => trans * 0.86)
//   .reduce((acc, trans) => acc + trans, 0);

// console.log(totalWithdrawalsEuro);

////////////////////////////////////////////////
// Задание 3

// Перепишите функцию getAverageHumanAge из Задания 2, но на этот раз как стрелочную функцию и с использованием method chaining.
// Тестовые данные:
// 1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]
// 2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]

// const getAverageHumanAge = catAges =>
//   catAges
//     .map(catAge => (catAge <= 2 ? catAge * 10 : catAge * 7))
//     .filter(humanAge => humanAge >= 18)
//     .reduce((acc, catAge, index, arr) => acc + catAge / arr.length, 0);

// const averageHumanAge1 = getAverageHumanAge([7, 3, 2, 4, 1, 15, 8, 1, 9, 2]);
// const averageHumanAge2 = getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]);
// console.log(averageHumanAge1);
// console.log(averageHumanAge2);

// // Average value
// // 2, 3, 4 -> (2+3+4)/3 -> 3
// // 2, 3, 4 -> 2/3+3/3+4/3 -> 9/3 -> 3

////////////////////////////////////////////////
// Метод find()

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// const firstDeposit = transactions.find(trans => trans > 0);
// const firstWithdrawal = transactions.find(trans => trans < 0);
// console.log(firstDeposit);
// console.log(firstWithdrawal);

// const account1 = {
//   userName: 'Cecil Ireland',
//   transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
//   interest: 1.5,
//   pin: 1111,
// };

// const account2 = {
//   userName: 'Amani Salt',
//   transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
//   interest: 1.3,
//   pin: 2222,
// };

// const account3 = {
//   userName: 'Corey Martinez',
//   transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
//   interest: 0.8,
//   pin: 3333,
// };

// const account4 = {
//   userName: 'Kamile Searle',
//   transactions: [530, 1300, 500, 40, 190],
//   interest: 1,
//   pin: 4444,
// };

// const account5 = {
//   userName: 'Oliver Avila',
//   transactions: [630, 800, 300, 50, 120],
//   interest: 1.1,
//   pin: 5555,
// };

// const accounts = [account1, account2, account3, account4, account5];

// const coreyMartinezAccount = accounts.find(
//   account => account.userName === 'Corey Martinez'
// );
// console.log(coreyMartinezAccount);

////////////////////////////////////////////////
// Методы some() и every()

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// console.log(transactions.includes(50));
// console.log(transactions.includes(150));

// some()

// console.log(transactions.some(trans => trans === 50));
// const hasWithdrawals = transactions.some(trans => trans < 0);
// console.log(hasWithdrawals);
// const hasWithdrawalsOver5000 = transactions.some(trans => trans < -5000);
// console.log(hasWithdrawalsOver5000);

// every()

// console.log(transactions.every(trans => trans < 0));
// console.log(transactions.every(trans => Math.abs(trans) > 20));

////////////////////////////////////////////////
// Методы flat() и flatMap()

// const someArray = [[1, 3, 5], [2, 4, 6], 7, 8, 9];

// console.log(someArray.flat());

// const someDeeperArray = [[1, [3, 5]], [[2, 4], 6], 7, 8, 9];
// console.log(someDeeperArray.flat(2));

// const account1 = {
//   userName: 'Cecil Ireland',
//   transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
//   interest: 1.5,
//   pin: 1111,
// };

// const account2 = {
//   userName: 'Amani Salt',
//   transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
//   interest: 1.3,
//   pin: 2222,
// };

// const account3 = {
//   userName: 'Corey Martinez',
//   transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
//   interest: 0.8,
//   pin: 3333,
// };

// const account4 = {
//   userName: 'Kamile Searle',
//   transactions: [530, 1300, 500, 40, 190],
//   interest: 1,
//   pin: 4444,
// };

// const account5 = {
//   userName: 'Oliver Avila',
//   transactions: [630, 800, 300, 50, 120],
//   interest: 1.1,
//   pin: 5555,
// };

// const accounts = [account1, account2, account3, account4, account5];

// const allTransactionArrays = accounts.map(account => account.transactions);
// console.log(allTransactionArrays);

// const allTransactions = allTransactionArrays.flat();
// console.log(allTransactions);

// const bankBalance = allTransactions.reduce((acc, trans) => acc + trans, 0);
// console.log(bankBalance);

// const bankBalance1 = accounts
//   .map(account => account.transactions)
//   .flat()
//   .reduce((acc, trans) => acc + trans, 0);
// console.log(bankBalance1);

// const bankBalance2 = accounts
//   .flatMap(account => account.transactions)
//   .reduce((acc, trans) => acc + trans, 0);
// console.log(bankBalance2);

////////////////////////////////////////////////
// Сортировка Массивов

// // Strings
// const names = ['John', 'Sara', 'Evan', 'Steve', 'Cecil'];
// console.log(names.sort());
// console.log(names);

// // Numbers
// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// // return < 0 -> x, y
// // return > 0 -> y, x

// // Ascending order

// // transactions.sort((x, y) => {
// //   if (x > y) {
// //     return 1;
// //   }
// //   if (x < y) {
// //     return -1;
// //   }
// // });

// transactions.sort((x, y) => x - y);

// console.log(transactions);

// // Descending order

// // transactions.sort((x, y) => {
// //   if (x > y) {
// //     return -1;
// //   }
// //   if (x < y) {
// //     return 1;
// //   }
// // });

// transactions.sort((x, y) => y - x);

// console.log(transactions);

////////////////////////////////////////////////
// Другие Способы Создания И Заполнения Массивов

// console.log([1, 2, 3]);
// console.log(new Array(1, 2, 3));

// // empty arrays
// const arr = new Array(3);
// console.log(arr);
// // console.log(arr.map(() => 7));

// // Method fill()
// // arr.fill(7);
// // arr.fill(7, 1);
// arr.fill(7, 1, 2);
// console.log(arr);

// const arr1 = [1, 1, 1, 1, 1];
// arr1.fill(3, 2, 4);
// console.log(arr1);

// Array.from() method
// const arr = Array.from({ length: 5 }, () => 1);
// console.log(arr);

// const arr1 = Array.from({ length: 5 }, (_, index) => index + 1);
// console.log(arr1);

////////////////////////////////////////////////
// Методы Массивов На Практике

// const account1 = {
//   userName: 'Cecil Ireland',
//   transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
//   interest: 1.5,
//   pin: 1111,
// };

// const account2 = {
//   userName: 'Amani Salt',
//   transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
//   interest: 1.3,
//   pin: 2222,
// };

// const account3 = {
//   userName: 'Corey Martinez',
//   transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
//   interest: 0.8,
//   pin: 3333,
// };

// const account4 = {
//   userName: 'Kamile Searle',
//   transactions: [530, 1300, 500, 40, 190],
//   interest: 1,
//   pin: 4444,
// };

// const account5 = {
//   userName: 'Oliver Avila',
//   transactions: [630, 800, 300, 50, 120],
//   interest: 1.1,
//   pin: 5555,
// };

// const accounts = [account1, account2, account3, account4, account5];

// // Ex. 1
// const bankDepositTotal = accounts
//   .flatMap(account => account.transactions)
//   .filter(trans => trans > 0)
//   .reduce((acc, depo) => acc + depo, 0);
// console.log(bankDepositTotal);

// // Ex. 2
// // const withdrawalsOver300 = accounts
// //   .flatMap(account => account.transactions)
// //   .filter(trans => trans <= -300).length;
// // console.log(withdrawalsOver300);

// const withdrawalsOver300 = accounts
//   .flatMap(account => account.transactions)
//   .reduce((counter, trans) => (trans <= -300 ? counter + 1 : counter), 0);
// console.log(withdrawalsOver300);

// // Ex. 3

// const { depositsTotal, withdrawalsTotal } = accounts
//   .flatMap(account => account.transactions)
//   .reduce(
//     (acc, trans) => {
//       // trans > 0
//       //   ? (acc.depositsTotal += trans)
//       //   : (acc.withdrawalsTotal += trans);
//       acc[trans > 0 ? 'depositsTotal' : 'withdrawalsTotal'] += trans;
//       return acc;
//     },
//     { depositsTotal: 0, withdrawalsTotal: 0 }
//   );
// console.log(depositsTotal, withdrawalsTotal);

// // Ex. 4
// // работа с массивами в javascript -> Работа с Массивами в Javascript

// const text1 = 'работа с массивами в javascript';
// const text2 = 'работа с массивами в javascript ПРОСТЫМ языком для новичков';
// const text3 = 'работа с массивами и строками в javascript';
// const text4 = 'для чего нужны массивы в javascript';

// const textToTitleCase = function (text) {
//   const exeptions = ['с', 'в', 'для', 'и', 'по', 'на', 'о'];

//   const capitalizeString = word => word[0].toUpperCase() + word.slice(1);

//   const titleCase = text
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exeptions.includes(word) ? word : capitalizeString(word)))
//     .join(' ');
//   return capitalizeString(titleCase);
// };

// console.log(textToTitleCase(text1));
// console.log(textToTitleCase(text2));
// console.log(textToTitleCase(text3));
// console.log(textToTitleCase(text4));

////////////////////////////////////////////////
// Задание 4

// Женя с Юлей все еще изучают кошек, и на этот раз они изучают, едят ли кошки слишком много или слишком мало.
// Слишком много еды означает, что текущая порция пищи кошки больше рекомендуемой, а слишком мало еды - наоборот.
// Нормальное количество еды означает, что текущая порция корма для кошки находится в диапазоне от 10% выше и 10% ниже рекомендуемой порции.
// ( рекомендуемая * 0.9 < нормальная < рекомендуемая * 1.1 )

// 1. Переберите элементы массива cats, которые являются объектами, и для каждой кошки вычислите рекомендуемую порцию еды и добавьте ее к объекту, как новое свойство. Не создавайте новый массив, просто переберите массив!
// Формула вычисления рекомендуемой порции:
// рекомендуемая порция = вес кошки * 0.75 * 12 (результат в граммах, а вес кошки в килограммах).
// 2. Найдите кошку, имя хозяина которой Алекс и выведите в консоль, ест ли эта кошка слишком много или слишком мало. Подсказка: у некоторых кошек есть несколько владельцев, поэтому вам сначала нужно найти Алекса в массиве владельцев.
// 3. Создайте массив, содержащий всех владельцев кошек, которые слишком много едят (catsEatTooMuchOwners), и массив со всеми владельцами кошек, которые слишком мало едят (catsEatTooLittleOwners).
// 4. Выведите в консоль строку для каждого из массивов, созданных в пункте 3:
// "Марина, Алиса, Борис - хозяева кошек, которые едят слишком много!" и "Наташа, Ирина, Алекс  - хозяева кошек, которые едят слишком мало!"
// 5. Выведите в консоль, ест ли хоть одна кошка в точном соответствии с рекомендуемым количеством еды (просто true или false).
// 6. Выведите в консоль, ест ли хоть одна кошка нормальное количество еды (просто true или false).
// 7. Создайте массив, содержащий кошек, которые едят нормальное количество еды (попробуйте повторно использовать условие, используемое в пункте 6).
// 8. Создайте мелкую (shallow) копию массива cats и отсортируйте по свойству рекомендуемая порция еды по возрастанию (имейте в виду, что порции находятся внутри объектов массива).

const cats = [
  { catWeight: 3, foodWeight: 25, owners: ['Наташа'] },
  { catWeight: 6, foodWeight: 90, owners: ['Марина', 'Алиса'] },
  { catWeight: 4, foodWeight: 45, owners: ['Алекс', 'Ирина'] },
  { catWeight: 7, foodWeight: 80, owners: ['Борис'] },
];

// 1
cats.forEach(cat => (cat.recommendedPortion = cat.catWeight * 0.75 * 12));

console.log(cats);

// 2
const alexCat = cats.find(cat => cat.owners.includes('Алекс'));
console.log(alexCat);
console.log(
  `Эта кошка ест слишком ${
    alexCat.foodWeight > alexCat.recommendedPortion ? 'много' : 'мало'
  }.`
);

// 3

const catsEatTooMuchOwners = cats
  .filter(cat => cat.foodWeight > cat.recommendedPortion)
  .flatMap(cat => cat.owners);
console.log(catsEatTooMuchOwners);

const catsEatTooLittleOwners = cats
  .filter(cat => cat.foodWeight < cat.recommendedPortion)
  .flatMap(cat => cat.owners);
console.log(catsEatTooLittleOwners);

// 4
// "Марина, Алиса, Борис - хозяева кошек, которые едят слишком много!" и "Наташа, Ирина, Алекс  - хозяева кошек, которые едят слишком мало!"

console.log(
  `${catsEatTooMuchOwners.join(
    ', '
  )} - хозяева кошек, которые едят слишком много!`
);
console.log(
  `${catsEatTooLittleOwners.join(
    ', '
  )} - хозяева кошек, которые едят слишком мало!`
);

// 5
console.log(cats.some(cat => cat.foodWeight === cat.recommendedPortion));

// 6

const isFoodWeightNormal = cat =>
  cat.foodWeight > cat.recommendedPortion * 0.9 &&
  cat.foodWeight < cat.recommendedPortion * 1.1;

console.log(cats.some(isFoodWeightNormal));

// 7
console.log(cats.filter(isFoodWeightNormal));

// 8
const cats1 = cats
  .slice()
  .sort((x, y) => x.recommendedPortion - y.recommendedPortion);

console.log(cats1);
