'use strict';

////////////////////////////////////////////////////////////////////////
// Функции-Конструкторы и Оператор new

// const Person = function (firstName, birthYear) {
//   // Instance properties - свойства экземпляра
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Никогда не делать этого
//   // this.printAge = function() {
//   //   console.log(2021 - this.birthYear);
//   // };
// };

// const youra = new Person('YouRa', 1974);
// console.log(youra);

// // 1. Создаётся новый пустой объект {}
// // 2. Вызывается функция, this = {}
// // 3. {} связывается с прототипом
// // 4. Функция автоматически возвращает {}

// const mary = new Person('Mary', 2000);
// const john = new Person('John', 2003);
// console.log(mary, john);

// const jack = 'Jack';

// console.log(mary instanceof Person);
// console.log(jack instanceof Person);

// ////////////////////////////////////////////////////////////////////////
// // Прототипы

// console.log(Person.prototype);

// Person.prototype.printAge = function () {
//   console.log(2021 - this.birthYear);
// };

// youra.printAge();
// mary.printAge();
// john.printAge();

// console.log(youra.__proto__);
// console.log(youra.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(mary));
// console.log(Person.prototype.isPrototypeOf(john));
// console.log(Person.prototype.isPrototypeOf(Person));
// // .prototypeOfLinkedObjects

// Person.prototype.creatureClass = 'Mammal';
// console.log(mary, john);
// console.log(mary.hasOwnProperty('birthYear'));
// console.log(mary.hasOwnProperty('creatureClass'));
// console.log(youra.hasOwnProperty('birthYear'));

//////////////////////////////////////////////////////////////////////
// Прототипное Наследование для Встроенных Объектов

// // Person.prototype
// console.log(youra.__proto__);

// // Object.prototype - верхушка цепи прототипов
// console.log(youra.__proto__.__proto__);

// // null
// console.log(youra.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// const numbers = [3, 4, 2, 5, 8, 8, 8, 2, 2];
// console.log(numbers.__proto__);
// console.log(Object.getPrototypeOf(numbers));
// console.log(numbers.__proto__ === Array.prototype);
// console.log(numbers.__proto__.__proto__);

// Array.prototype.uniqueElements = function () {
//   return [...new Set(this)];
// };

// console.log(numbers.uniqueElements());

// const h2 = document.querySelector('h2');
// console.dir(h2);
// console.dir((n) => n * 2);

//////////////////////////////////////////////////////////////////////
// Задание 1

// 1. Используйте функцию-конструктор, чтобы реализовать автомобиль - Car. Автомобиль имеет свойства name и speed. Свойство speed - это текущая скорость автомобиля в км / ч.
// 2. Реализуйте метод accelerate(), который увеличивает скорость автомобиля на 5 и записывает новую скорость в консоль.
// 3. Реализуйте метод break(), который снижает скорость автомобиля на 5 и записывает новую скорость в консоль.
// 4. Создайте 2 объекта Car и поэкспериментируйте с вызовами методов accelerate() и break() несколько раз для каждого из них.

// Тестовые данные:
// Данные для автомобиля 1: Honda едет со скоростью 120 км / ч
// Данные для автомобиля 2: BMW едет со скоростью 150 км / ч.

// const Car = function (name, speed) {
//   this.name = name;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 5;
//   console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
// };

// Car.prototype.breake = function () {
//   this.speed -= 5;
//   console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
// };

// const honda = new Car('Honda', 120);
// const bmw = new Car('BMW', 150);

// honda.accelerate();
// honda.accelerate();
// honda.accelerate();
// honda.accelerate();
// honda.accelerate();
// honda.accelerate();

// bmw.breake();
// bmw.breake();
// bmw.breake();
// bmw.breake();

//////////////////////////////////////////////////////////////////////
// Классы ES6

// // Class expression
// const Person = class {

// }

// Class declaration
// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // Методы добавляются в свойство .prototype
//   printAge() {
//     console.log(2021 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hello! My name is ${this.firstName}!`);
//   }
// }

// const jack = new Person('Jack', 2000);
// console.log(jack);
// jack.printAge();
// console.log(jack.__proto__ === Person.prototype);
// console.log(Object.getPrototypeOf(jack) === Person.prototype);

// // Person.prototype.greet = function () {
// //   console.log(`Hello! My name is ${this.firstName}!`);
// // };

// jack.greet();

// // 1. Классы не "поднимаются" при помощи hoisting
// // 2. Классы являются "firts class citizens"
// // 3. Тело класса выполняется в strict режиме

//////////////////////////////////////////////////////////////////////
// Setters & Getters

// const account = {
//   owner: 'youra',
//   transactions: [300, 500, -100, 600],

//   lastTransaction() {
//     return this.transactions.slice(-1).pop();
//   },
// };

// console.log(account.lastTransaction());

// const account = {
//   owner: 'youra',
//   transactions: [300, 500, -100, 600],

//   get lastTransaction() {
//     return this.transactions.slice(-1).pop();
//   },

//   set lastTransaction(trans) {
//     this.transactions.push(trans);
//   },
// };

// console.log(account.lastTransaction);
// account.lastTransaction = 100;
// console.log(account.transactions);

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Методы добавляются в свойство .prototype
//   printAge() {
//     console.log(2021 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hello! My name is ${this.fullName}!`);
//   }

//   get age() {
//     return 2021 - this.birthYear;
//   }

//   // Установить значение в уже существующее свойство
//   set fullName(personName) {
//     console.log(personName);
//     if (personName.includes(' ')) {
//       this._fullName = personName;
//     } else {
//       alert(`Полное имя должно состоять из имени и фамилии!`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const jack = new Person('Jack White', 2000);
// console.log(jack);
// const jane = new Person('Jane Red', 2000);
// console.log(jane.fullName);

//////////////////////////////////////////////////////////////////////
// Статические Методы

// const Person = function (firstName, birthYear) {
//   // Instance properties - свойства экземпляра
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Никогда не делать этого
//   // this.printAge = function() {
//   //   console.log(2021 - this.birthYear);
//   // };
// };

// Person.highFive = function () {
//   console.log('High five!');
// };

// Person.prototype.highFive = function () {
//   console.log('High five!');
// };

// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // Методы добавляются в свойство .prototype
//   printAge() {
//     console.log(2021 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hello! My name is ${this.firstName}!`);
//   }

//   // Статический метод
//   static highFive() {
//     console.log('High five!');
//   }
// }

// Person.highFive();

// const jack = new Person('Jack', 1999);
// // jack.highFive();

//////////////////////////////////////////////////////////////////////
// Object.create()

// const PersonProto = {
//   printAge() {
//     console.log(2021 - this.birthYear);
//   },

//   initPerson(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const jack = Object.create(PersonProto);
// console.log(jack);

// jack.name = 'Jack';
// jack.birthYear = 2000;

// jack.printAge();

// console.log(Object.getPrototypeOf(jack) === PersonProto);

// const jane = Object.create(PersonProto);
// jane.initPerson('Jane', 2002);
// jane.printAge();

//////////////////////////////////////////////////////////////////////
// Задание 2

// 1.Решите Задание 1, но теперь с использованием класса ES6
// 2. Добавьте геттер speedMph, который возвращает текущую скорость в милях в час (разделите
// на 1,6)
// 3. Добавьте cеттер speedMph, который устанавливает текущую скорость в милях в час (но
// преобразует его в км / ч перед сохранением значения, умножая ввод на 1,6)
// 4. Создайте новый автомобиль и поэкспериментируйте с методами accelerate() и break(), а также с геттером и сеттером.

// class Car {
//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 5;
//     console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
//   }

//   breake() {
//     this.speed -= 5;
//     console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
//   }

//   get speedMph() {
//     return this.speed / 1.6;
//   }

//   set speedMph(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const honda = new Car('Honda', 120);
// const bmw = new Car('BMW', 150);

// honda.accelerate();
// honda.accelerate();
// honda.accelerate();
// honda.accelerate();
// honda.accelerate();
// honda.accelerate();

// bmw.breake();
// bmw.breake();
// bmw.breake();
// bmw.breake();

// console.log(honda.speedMph);

// honda.breake();
// honda.speedMph = 20;
// console.log(honda.speed);

//////////////////////////////////////////////////////////////////////
// Наследование "Классов". Функции-Конструкторы

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.printAge = function () {
//   console.log(2021 - this.birthYear);
// };

// const Student = function (firstName, birthYear, dept) {
//   Person.call(this, firstName, birthYear);
//   this.dept = dept;
// };

// // Связываем прототипы
// Student.prototype = Object.create(Person.prototype);

// // Student.prototype = Person.prototype;

// Student.prototype.introduce = function () {
//   console.log(
//     `My name is ${this.firstName} and I study at the "${this.dept}" department.`
//   );
// };

// const jack = new Student('Jack', 2000, 'Programming');
// console.log(jack);
// jack.introduce();
// jack.printAge();

// // console.log(jack.__proto__);
// console.log(Object.getPrototypeOf(jack));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(jack)));

// console.log(jack instanceof Student);
// console.log(jack instanceof Person);
// console.log(jack instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

//////////////////////////////////////////////////////////////////////
// Задание 3

// 1. Используйте функцию-конструктор ElectricCar для реализации электрического автомобиля в качестве дочернего «класса» Car. Помимо названия и текущей скорости, у электромобиля также есть текущий заряд аккумулятора в % (свойство battery).
// 2. Реализуйте метод chargeBattery, который принимает аргумент chargeLevel и устанавливает для заряда аккумулятора это значение.
// 3. Реализуйте метод accelerate, который будет увеличивать скорость автомобиля на 10 и снижать заряд аккумулятора на 1% и затем выводит в консоль такое сообщение: «Тесла едет со скоростью 120 км / ч, с зарядом 32%».
// 4. Создайте электромобиль и поэкспериментируйте с методами accelerate() и break(), chargeBattery() (зарядите до 80%). Обратите внимание, что происходит, когда вы «ускоряетесь»! Подсказка: просмотрите определение полиморфизма
// Тестовые данные:
// Тесла едет со скоростью 100 км / ч, с зарядом 33%

// const Car = function (name, speed) {
//   this.name = name;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 5;
//   console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
// };

// Car.prototype.breake = function () {
//   this.speed -= 5;
//   console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
// };

// const ElectricCar = function (name, speed, battery) {
//   Car.call(this, name, speed);
//   this.battery = battery;
// };

// ElectricCar.prototype = Object.create(Car.prototype);

// ElectricCar.prototype.chargeBattery = function (chargeLevel) {
//   this.battery = chargeLevel;
// };

// ElectricCar.prototype.accelerate = function () {
//   this.speed += 10;
//   this.battery -= 1;
//   console.log(
//     `${this.name} едет со скоростью ${this.speed} км / ч, с зарядом ${this.battery}%`
//   );
// };

// const tesla = new ElectricCar('Тесла', 100, 33);
// console.log(tesla);
// tesla.chargeBattery(80);
// console.log(tesla);

// tesla.breake();
// tesla.breake();
// tesla.breake();

// tesla.accelerate();

// const bmw = new Car('BMW', 150);

// bmw.breake();
// bmw.breake();

// bmw.accelerate();
// bmw.accelerate();

//////////////////////////////////////////////////////////////////////
// Наследование "Классов". Классы ES6

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Методы добавляются в свойство .prototype
//   printAge() {
//     console.log(2021 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hello! My name is ${this.fullName}!`);
//   }

//   get age() {
//     return 2021 - this.birthYear;
//   }

//   // Установить значение в уже существующее свойство
//   set fullName(personName) {
//     // console.log(personName);
//     if (personName.includes(' ')) {
//       this._fullName = personName;
//     } else {
//       alert(`Полное имя должно состоять из имени и фамилии!`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static highFive() {
//     console.log('High five!');
//   }
// }

// class Student extends Person {
//   constructor(fullName, birthYear, dept) {
//     // Обязательно записать в самом начале!
//     super(fullName, birthYear);
//     this.dept = dept;
//   }

//   introduce() {
//     console.log(
//       `My name is ${this.fullName} and I study at the "${this.dept}" department.`
//     );
//   }

//   greet() {
//     console.log(`Меня зовут ${this.fullName} и я студент!`);
//   }
// }

// const jack = new Student('Jack White', 2001, 'Programming');
// console.log(jack);
// jack.introduce();
// jack.printAge();
// jack.greet();

//////////////////////////////////////////////////////////////////////
// Наследование "Классов". Object.create()

// const PersonProto = {
//   printAge() {
//     console.log(2021 - this.birthYear);
//   },

//   initPerson(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const StudentProto = Object.create(PersonProto);
// StudentProto.initStudent = function (firstName, birthYear, dept) {
//   PersonProto.initPerson.call(this, firstName, birthYear);
//   this.dept = dept;
// };

// StudentProto.introduce = function () {
//   console.log(
//     `My name is ${this.firstName} and I study at the "${this.dept}" department.`
//   );
// };

// const jack = Object.create(StudentProto);
// jack.initStudent('Jack', 2003, 'Programming');
// jack.introduce();
// jack.printAge();

//////////////////////////////////////////////////////////////////////
// Ещё Один Пример Класса

// Public fields
// Private fields
// Public methods
// Private methods

// class Account {
//   // Public fields
//   local = navigator.language;

//   // Private fields
//   #transactions = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // Protected properties with _
//     this.#pin = pin;
//     // this._transactions = [];
//     // this.local = navigator.language;

//     console.log(`Спасибо что открыли счёт в нашем банке, ${owner}!`);
//   }

//   // Public interface (methods) - API
//   deposit(value) {
//     this.#transactions.push(value);
//     return this;
//   }

//   withdraw(value) {
//     // this.transactions.push(-value);
//     this.deposit(-value);
//     return this;
//   }

//   setDefaultPin() {
//     this.#pin = '0000';
//   }

//   getTransactions() {
//     return this.#transactions;
//   }

//   requestLoan(value) {
//     if (this.#approveLoan(value)) {
//       this.deposit(value);
//       console.log(`Займ утверждён!`);
//       return this;
//     }
//   }

//   static greet() {
//     console.log('Добро пожаловать в "Просто Банк"!');
//   }

//   // Private methods
//   // Protected methods with _
//   #approveLoan(value) {
//     return true;
//   }
// }

// const account1 = new Account('Джек', 'USD', 1111);

// // account1.#transactions.push(500);
// // account1.#transactions.push(-100);

// account1.deposit(500);
// account1.withdraw(100);
// account1.requestLoan(10000);
// // account1.#approveLoan(10000);
// account1.setDefaultPin();

// console.log(account1);
// // console.log(account1.#pin);
// console.log(account1.getTransactions());
// Account.greet();

// account1
//   .deposit(5000)
//   .deposit(1000)
//   .withdraw(300)
//   .requestLoan(20000)
//   .withdraw(1000);

//////////////////////////////////////////////////////////////////////
// Задание 4

// 1. Повторно сделайте Задание 3, но на этот раз с использованием классов ES6.
// 2. Сделайте свойство battery приватным.
// 3. Реализуйте возможность цепочки вызова методов accelerate и chargeBattery, тоже сделайте для метода break в классе Car. Затем поэкспериментируйте с цепочкой.
// Тестовые данные:
// Тесла едет со скоростью 100 км / ч, с зарядом 33%

class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 5;
    console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
  }

  breake() {
    this.speed -= 5;
    console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
    return this;
  }
}

class ElectricCar extends Car {
  #battery;

  constructor(name, speed, battery) {
    super(name, speed);
    this.#battery = battery;
  }

  chargeBattery(chargeLevel) {
    this.#battery = chargeLevel;
    return this;
  }

  accelerate() {
    this.speed += 10;
    this.#battery -= 1;
    console.log(
      `${this.name} едет со скоростью ${this.speed} км / ч, с зарядом ${
        this.#battery
      }%`
    );
    return this;
  }
}

const tesla = new ElectricCar('Тесла', 100, 33);
console.log(tesla);
tesla.chargeBattery(80);
// console.log(tesla.#battery);

tesla.breake();
tesla.breake();
tesla.breake();

tesla.accelerate();

const bmw = new Car('BMW', 150);

bmw.breake();
bmw.breake();

bmw.accelerate();
bmw.accelerate();

tesla
  .accelerate()
  .accelerate()
  .accelerate()
  .breake()
  .chargeBattery(90)
  .accelerate();
