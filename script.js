// let btn = document.querySelector("button")

// let imgArr = [
//     "https://images.unsplash.com/photo-1735627062325-c978986b1871?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1736890722772-97aab67379a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1737008220100-804be759a152?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1737995720044-8d9bd388ff4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D",
// ]

// let getRandom = () => {
//     let randomX = Math.random() * 90;
//     let randomY = Math.random() * 90;
//     let randomImage = Math.floor(Math.random() * imgArr.length);
//     return { randomX, randomY, randomImage }
// }

// btn.addEventListener("click", () => {
//     let { randomX, randomY, randomImage } = getRandom()
//     let image = document.createElement("img");
//     image.setAttribute("src", `${imgArr[randomImage]}`);
//     image.style.height = "200px";
//     image.style.width = "200px";
//     image.style.position = "absolute"
//     image.style.left = randomX + "%";
//     image.style.top = randomY + "%";
//     document.body.appendChild(image)
// })





// ********************************************************************************************************


// 1. Extract the first and third elements from the array numbers = [5, 10, 15, 20] using destructuring.
// let numbers = [5, 10, 15, 20];
// let [a, , b] = numbers;
// console.log(a, b)

// 2. Swap the values of a and b using array destructuring.
// let numbers = [5, 10, 15, 20];
// let [a, b] = numbers;
// console.log("Before swaping", a, b);
// [a, b] = [b, a];
// console.log("After swaping", a, b)


// 3. Destructure the object {name: "John", age: 25, city: "New York"} to extract name and city into separate variables.
// let object = {name: "John", age: 25, city: "New York"}
// let {name, city} = object;
// console.log(name, city);


// 4. Using destructuring, assign a default value of "Guest" to user if it is not present in the object {id: 101}.

// let object = {id: 101};
// let { user = "guest"} = object;
// console.log(user)


// 5. Extract first and last from the nested object {person: {first: "Alice", last: "Johnson"}} using destructuring.

// let obj = {person: {first: "Alice", last: "Johnson"}};
// let {first, last} = obj.person;
// console.log(first, last)


// 6. Use array destructuring to ignore the second element of [100, 200, 300] and store the rest in another variable.

// let arr = [100, 200, 300, 400, 500];
// let [a, , ...c] = arr;
// console.log(a, c)


// 7. Destructure the array [1, 2, 3, 4] inside a function parameter and return the sum of all elements.

// let sum = ([a, b, c, d]) => {
//     return a + b + c + d;
// }
// console.log(sum([1, 2, 3, 4]))


// 8. Destructure an object {name: "David", age: 30, job: "Developer"} and rename job to profession.

// let object = { name: "David", age: 30, job: "Developer" };
// let { job: profession } = object;
// console.log(profession);


// 9. Destructure the following nested array [[1, 2], [3, 4]] to extract 1 and 4.
// let [a, b] = arr;
// let newArr = [...a, ...b]
// let [c, , , d] = newArr
// console.log(c, d)

// 10. Destructure an array [10, 20] and swap the values inside an if condition only if the first value is smaller than the second.
// let arr = [10, 20];
// let [a, b] = arr;
// if (a < b) {
//     [a, b] = [b, a];
// }
// console.log([a, b])


// 11. Destructure the object {user: {id: 5, info: {name: "Sam", city: "Paris"}}} and extract name and city.
// let object = { user: { id: 5, info: { name: "Sam", city: "Paris" } } };
// let {name, city} = object.user.info;
// console.log(name, city)


// 12. Given an array [10, [20, 30], 40], destructure it to extract 10, 30, and 40 into separate variables.
// let arr = [10, [20, 30], 40];
// let [a, [ , b], c] = arr;
// console.log(a, b , c)

// 13. Using array destructuring, loop over an array [[1, "one"], [2, "two"], [3, "three"]] and print each key-value pair.
// const array = [[1, "one"], [2, "two"], [3, "three"]];
// array.forEach(([key, value]) => {
//     console.log(`Key: ${key}, Value: ${value}`);
// })



// 14. Write a function that takes an object {a: 5, b: 10, c: 15} as an argument and returns the sum of a and c using destructuring.

// let sum = ({a, c}) => {
//     return a + c;
// }
// console.log(sum({a: 5, b: 10, c: 15}))


// 15. Destructure a nested object {data: {user: {id: 3, details: {age: 25, country: "India"}}}} and extract id and country.
// const object = {data: {user: {id: 3, details: {age: 25, country: "India"}}}};
// const {id} = object.data.user;
// const {country} = object.data.user.details;
// console.log(id, country)


// 16. Given const obj = {a: [1, 2, {b: 3}], c: {d: 4, e: [5, 6]}}, destructure to extract 3 and 6.
// const obj = {a: [1, 2, {b: 3}], c: {d: 4, e: [5, 6]}};
// const {a:[ , , {b}]} = obj;
// const [, f] = obj.c.e
// console.log(b, f)

// 17. Destructure an object {items: [{price: 100}, {price: 200}], discount: 0.1} to calculate the total price after discount.
// const object = {items: [{price: 100}, {price: 200}], discount: 0.1};
// const {items, discount} = object;
// const totalPrice = items.reduce((acc, cur) => acc + cur.price , 0)
// const afterDiscountPrice = totalPrice - (totalPrice * discount);
// console.log(afterDiscountPrice)


// 18. Use destructuring in function parameters to pass {name: "Alice", scores: [80, 90, 100]} and return the average score.
// const getAverageScore = ({name, scores}) => {
//     [a, b, c] = scores;
//     return (a + b + c)/3
// }
// console.log(getAverageScore({name: "Alice", scores: [80, 90, 100]}))


// 19. Given const users = [{id: 1, name: "John"}, {id: 2, name: "Jane"}], use destructuring inside map() to extract id and name.
// const users = [{id: 1, name: "John"}, {id: 2, name: "Jane"}]
// let res = users.map(({id, name}) => {
//     console.log(`id: ${id}, name: ${name}`)
// })


// 20. Destructure an array [["x", 1], ["y", 2], ["z", 3]] using forEach() and log "Key: x, Value: 1" format for each pair.
// const arr = [["x", 1], ["y", 2], ["z", 3]]
// arr.forEach(([key, value]) => {
//     console.log(`key: ${key}, value: ${value}`);
// })