const { v4: uuid } = require('uuid');

let contacts = [
  {
    id: uuid(),
    name: 'João Gabriel',
    email: 'joaogabriel@email.com',
    phone: '1212121212',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Isabele Gonçalves',
    email: 'isabelegoncalves@email.com',
    phone: '1313131313',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
