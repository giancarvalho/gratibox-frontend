// eslint-disable-next-line import/no-extraneous-dependencies
import faker from 'faker';

export default function createFakeUser() {
  const userData = {
    name: faker.name.findName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
  };

  return userData;
}
