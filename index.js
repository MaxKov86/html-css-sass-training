// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.setPrice = function (newPrice) {
//   this.price = newPrice;
// };

// const bmw = new Car({
//   brand: "BMW",
//   model: "I8",
//   price: 50000,
// });

// bmw.setPrice(750000);
// console.log(bmw);

// class User {
//   constructor({ name, age, height } = {}) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//   }

//   setAge(newAge) {
//     this.age = newAge;
//   }
// }

// const newUser = new User({
//   name: "Max",
//   age: 36,
//   height: 189,
// });

// newUser.setAge(25);
// console.log(newUser);

// class Counter {
//   #value;
//   constructor({ value, step } = {}) {
//     this.#value = value;
//     this.step = step;
//   }

//   increment() {
//     this.#value += this.step;
//   }

//   decrement() {
//     this.#value -= this.step;
//   }

//   get value() {
//     return this.#value;
//   }

//   set value(newValue) {
//     this.#value = newValue;
//   }
// }

// const counter = new Counter({
//   value: 0,
//   step: 1,
// });

// console.log(counter);

// const btnInc = document.querySelector('[data-action="increment"]');
// const btnDec = document.querySelector('[data-action="decrement"]');
// const value = document.querySelector("[data-value]");

// btnInc.addEventListener("click", onBtnIncClick);

// function onBtnIncClick(e) {
//   counter.increment();
//   value.textContent = counter.value;
// }

// btnDec.addEventListener("click", onBtnDecClick);

// function onBtnDecClick(e) {
//   counter.decrement();
//   value.textContent = counter.value;
// }

// class Blogger {
//   constructor({ email, age, numberOfPosts, topics } = {}) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `Blogger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts about ${this.topics} `;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }

//   incTopics(topic) {
//     this.topics.push(topic);
//   }
// }

// const mango = new Blogger({
//   email: "maxkov@gmail.com",
//   age: 36,
//   numberOfPosts: 10,
//   topics: ["sport", "travel"],
// });

// const poly = new Blogger({
//   email: "poly@gmail.com",
//   age: 25,
//   numberOfPosts: 18,
//   topics: ["tech", "cooking"],
// });

// console.log(mango.getInfo());
// mango.updatePostCount(10);
// mango.incTopics("dogs");
// console.log(mango.getInfo());

// console.log(poly.getInfo());
// poly.updatePostCount(5);
// poly.incTopics("cats");
// console.log(poly.getInfo());

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     if (!this.items.includes(item)) {
//       this.items.push(item);
//       return;
//     }
//     console.log("Такий товар вже є!)");
//   }

//   removeItem(item) {
//     const index = this.items.indexOf(item);
//     if (this.items.includes(item)) {
//       this.items.splice(index, 1);
//     }
//   }
// }

// // !!~index

// const fruits = new Storage(["apple", "banana", "cherry"]);

// console.log(fruits.getItems());
// fruits.addItem("stroberry");
// console.table(fruits.getItems());
// fruits.addItem("orange");
// console.table(fruits.getItems());
// fruits.removeItem("cherry");
// console.table(fruits.getItems());
// fruits.removeItem("apple");
// console.table(fruits.getItems());

// class User {
//   #login;
//   #email;

//   constructor({ login, email } = {}) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   login: 12345677,
//   email: "maxkov@gmail.com",
// });

// console.log(mango);
// mango.login = 9876543;
// console.log(mango);

// const fnA = (a, callback) => {
//   console.log(a * callback(10, 10));
// };

// const fnB = (x, y) => x + y;

// fnA(10, fnB);

// const empl = 5;
// const minSalary = 1000;
// const maxSalary = 10000;
// let totalSalary = 0;
// for (let i = 1; i <= empl; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );
//   console.log(`Worker ${i} have a ${salary} $`);
//   totalSalary += salary;
// }
// console.log(totalSalary);

// function areYouPlayingBanjo(name) {
//   if (name[0] === "R" || name[0] === "r") {
//     return name + " plays banjo";
//   }

//   return name + " does not play banjo";
// }

// console.log(areYouPlayingBanjo("Ron"));

// function countBy(x, n) {
//   let z = [];
//   return z;
// }

// function lovefunc(flower1, flower2) {
//   return flower1 % 2 !== flower2 % 2;
// }

// function lovefunc(flower1, flower2) {
//   return (flower1 + flower2) % 2 === 1;
// }

// function lovefunc(flower1, flower2) {
//   // moment of truth
//   return (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
//     (flower1 % 2 !== 0 && flower2 % 2 === 0)
//     ? true
//     : false;
// }
// console.log(lovefunc(2, 1));

// function maps(x) {
//   const updateX = x.map((arr) => arr * 2);
//   return updateX;
// }

// console.log(maps([1, 2, 3]));

// const array = [36, 99, 2, -3, 44];

// const minNum = Math.min(...array);
// console.log(minNum);

// function solution(str) {
//   return [...str].reverse().join("");
// }
// console.log(solution("Max"));

// const num = 123;
// const newNum = String(num);
// console.log(newNum);

// function invert(array) {
//   return array.map((arr) => (arr ? arr * -1 : 0));
// }
// console.log(invert([-1, 2, 7, -8, -3, 100]));

// function noSpace(x) {
//   return x.split(" ").join("");
// }

// console.log(noSpace("It is good"));

// function getSum(a, b) {
//   const min = a < b ? a : b;
//   const max = a < b ? b : a;

//   let sum = 0;
//   for (let i = min; i <= max; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(getSum(1, 5));

// const digitize = (n) => String(n).split("").reverse().map(Number);

// console.log(digitize(76342));

// function fakeBin(x) {}

// console.log(fakeBin("5863647383"));

// const numbers = [27, 45, 99, 188, 56, 9, 17, 333, 444];
// let total = 0;
// // numbers.map((number) => (total += number));
// for (const num of numbers) {
//   total += num % 2 === 0;
// }
// console.log(total);

// const logins = ["max", "111f", "world2000", "enter"];
// const loginToFind = "111f";

// const message = logins.includes(loginToFind) ? `Yes` : `No`;
// console.log(message);

// const cards = ["Card-1", "Card-2", "Card-3", "Card-4", "Card-5"];
// console.table(cards);

// const index = cards.indexOf("Card-3");
// console.log(index);

// cards.splice(index, 1);

// console.table(cards);

// cards.splice(3, 0, "index");
// console.table(cards);

// const findSmallestNum = (numbers) => Math.min(...numbers);
// console.log(findSmallestNum([8, 100, 65, 89, 444]));

// const filterArr = (array, ...args) => {
//   const updateArr = [];

//   console.log("Array:", array);
//   console.log("Args:", args);

//   for (const arr of array) {
//     if (args.includes(arr)) {
//       updateArr.push(arr);
//     }
//   }
//   return updateArr;
// };

// console.log(filterArr([2, 78, 35, 4, 11], 5, 88, 109, 4, 35, 66, 111));

// const obj = {
//   name: "You my hart",
//   count: 3,
//   author: "Modern talking",
// };
// const friends = [
//   { name: "Poly", online: true },
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Ajax", online: true },
// ];

// console.table(friends);

// const findName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.name);
//     if (friend.name === friendName) {
//       return "Знайшли!)";
//     }
//   }
// };
// console.log(findName(friends, "Kiwi"));

// function addProp(allFriends) {
//   for (const friend of allFriends) {
//     friend.quen = 1;
//   }
// }

// addProp(friends);

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   addProduct(product) {
//     const newProp = {
//       ...product,
//       quentity: 1,
//     };
//     for (const item of this.items) {
//       if (product.name === item.name) {
//         item.quentity += 1;
//         return;
//       }
//     }

//     this.items.push(newProp);
//   },
//   removeProduct(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];

//       if (name === productName) {
//         items.splice(i, 1);
//         return;
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let total = 0;
//     for (const { price, quentity } of this.items) {
//       total += price * quentity;
//     }
//     return total;
//   },
//   icrement(productName) {
//     for (const item of this.items) {
//       if (productName === item.name) {
//         item.quentity += 1;
//         return;
//       }
//     }
//   },
//   decrement(productName) {
//     for (const item of this.items) {
//       if (productName === item.name) {
//         item.quentity -= 1;
//         return;
//       }
//     }
//   },
// };
// cart.addProduct({ name: "apple", price: 50 });
// cart.addProduct({ name: "chery", price: 80 });
// cart.addProduct({ name: "orange", price: 100 });
// cart.addProduct({ name: "strobbery", price: 120 });
// cart.addProduct({ name: "apple", price: 50 });
// cart.addProduct({ name: "apple", price: 50 });
// cart.addProduct({ name: "orange", price: 100 });

// cart.icrement("apple");
// cart.decrement("chery");
// cart.decrement("chery");
// console.table(cart.getItems());
// console.log(cart.countTotalPrice());
// cart.removeProduct("apple");

// console.table(cart.getItems());

// console.log(cart.countTotalPrice());

// const fnA = function (a, b, callback) {
//   const res = callback(a, b);
//   console.log(res);
// };

// const fnB = function (x, y) {
//   return x + y;
// };

// fnA(2, 3, fnB);

// const makeSchef = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name}: ${dish}`);
//   };

//   return makeDish;
// };

// const max = makeSchef("Max");
// console.dir(max);
// max("Sendvich");

// const friends = [
//   { name: "Poly", online: true, id: 1 },
//   { name: "Mango", online: false, id: 2 },
//   { name: "Kiwi", online: true, id: 3 },
//   { name: "Ajax", online: true, id: 4 },
// ];

// const updateFr = friends.map((friend) =>
//   3 === friend.id ? { ...friend, id: 333 } : friend
// );

// console.table(updateFr);

// const user = {
//   name: "Mango",
//   showName() {
//     console.log("This:", this);
//     console.log("This.name:", this.name);
//   },
// };

// const newFunction = function (action) {
//   console.log(action);
//   action();
// };
// newFunction(user.showName);

// const ObjC = function () {};
// ObjC.prototype.name = function (hello) {
//   return hello;
// };

// const newObj = new ObjC();

// console.log(newObj.name("Hello World!"));
// const objB = Object.create(objC);
// objB.c = 20;
// const objA = Object.create(objB);
// objA.z = [];

// console.log(objA);

// const obj = function () {};
// console.log("obj:", obj);

// obj.prototype.name = "Hello";
// console.log(obj.name);

// console.log(window);
// import products from "./js/data.js";

// const markup = (product) => {
//   const productsListEl = document.createElement("article");
//   productsListEl.classList.add("products-list");

//   document.body.append(productsListEl);

//   const titleEl = document.createElement("h1");
//   titleEl.classList.add("products-list__title");
//   titleEl.textContent = `${product.name}`;

//   const weightEl = document.createElement("p");
//   weightEl.classList.add("products-list__weight");
//   weightEl.textContent = `Ціна за ${product.weght} кг`;

//   const priceEl = document.createElement("p");
//   priceEl.classList.add("products-list__price");
//   priceEl.textContent = `Ціна:${product.price} грн`;

//   productsListEl.append(titleEl, weightEl, priceEl);
//   return productsListEl;
// };

// const markupAllProducts = products.map(markup);

// const textEl = document.querySelector(".text");
// window.addEventListener("keydown", (e) => {
//   console.log(e.key);
//   textEl.textContent += e.key;
// });

// const clearBtn = document.querySelector(".clear");
// console.log(clearBtn);
// clearBtn.addEventListener("click", (e) => {
//   console.log(e.target);
//   textEl.textContent = "";
// });

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   for (const product of products) {
//     console.log(product[propName]);
//   }

//   // Change code above this line
// }
// getAllPropValues("name");

// function add(...args) {
//   console.log(args);
// }
// add(1, 2, 3, 4);

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const index = this.books.indexOf(oldName);
//     return this.books.splice(index, 1, newName);
//   },
// };
// bookShelf.updateBook("Haze", "Max");
// console.log(bookShelf.books);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// const getFriends = (users) => {
//   const friendsArray = users.flatMap((user) => user.friends);
//   const uniqFriends = friendsArray.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
//   return uniqFriends;
// };

// console.log(getFriends(users));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line
// const names = books.filter((book) => book.rating > MIN_BOOK_RATING);
// const arrayNames = names.map((name) => name.author);
// console.log(arrayNames);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   blacklistedEmails = [];

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   blacklist(email) {
//     return this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.map((blackEm) => blackEm.includes(email));
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const inputEl = document.querySelector("input");
// const boxesList = document.querySelector("#boxes");
// const btnCreateBox = document.querySelector("button[data-create]");
// const btnDestroyBox = document.querySelector("button[data-destroy]");

// let counter = "";

// inputEl.addEventListener("input", (e) => {
//   counter = Number(e.currentTarget.value);
// });

// btnCreateBox.addEventListener("click", (e) => {
//   createBoxes(counter);
// });

// btnDestroyBox.addEventListener("click", (e) => {
//   boxesList.innerHTML = "";
//   inputEl.value = "";
//   counter = "";
// });

// function createBoxes(amount) {
//   const arrayBoxes = [];

//   for (
//     let i = 0, width = 30, height = 30;
//     i < amount;
//     i += 1, width += 10, height += 10
//   ) {
//     const box = document.createElement("div");
//     box.style.marginTop = "15px";
//     box.style.width = width + "px";
//     box.style.height = height + "px";
//     box.style.border = "solid";
//     box.style.borderColor = getRandomHexColor();
//     box.style.backgroundColor = getRandomHexColor();
//     arrayBoxes.push(box);
//   }

//   boxesList.append(...arrayBoxes);
//   console.log(boxesList);
// }
const KEY = "feedBack";
localStorage.setItem(KEY, JSON.stringify({ a: 5, b: 8 }));
const string = localStorage.getItem("feedBack");
console.log(string);
