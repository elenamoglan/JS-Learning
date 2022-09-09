const user = {
  name: `User 1`,
  age: 123,
  address: {
    city: "Balti",
  },
};
const user2 = JSON.parse(JSON.stringify(user));

// for (let key in user) {
//     user2[key] = user[key];
// }

user2.name = `User 2`;
user2.age = 321;

user2.address.city = "Chisinau";

console.log(user);
console.log(user2);
