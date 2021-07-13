const { v4: uuid } = require('uuid');

const contacts = [
  {
    id: uuid(),
    name: 'João Gabriel',
    email: 'joaogabriel@email.com',
    phone: '1212121212',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
