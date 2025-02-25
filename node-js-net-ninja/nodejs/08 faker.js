// Awesome library to generate fake data

import { faker } from "@faker-js/faker";

// create 10 fake users
users = [...Array(10).keys()].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  dob: faker.date.past(),
  phone: faker.phone.phoneNumber(),
  address: faker.address.streetAddress(),
  city: faker.address.city(),
  state: faker.address.state(),
  zip: faker.address.zipCode(),
  country: faker.address.country(),
  about: faker.lorem.paragraph(),
  avatar: faker.image.avatar(),
  cover: faker.image.imageUrl(),
}));

console.log(users);



console.log(faker.animal.lion());
console.log(faker.internet.domainName());
console.log(faker.internet.domainWord());
console.log(faker.internet.email("John", "Doe"));