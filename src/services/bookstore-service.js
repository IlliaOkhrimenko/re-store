export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 30,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    },
    {
      id: 2,
      title: 'Eloquent JavaScript',
      author: 'Marijn Haverbeke',
      price: 40,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/51I9naPg55L._SX376_BO1,204,203,200_.jpg'
    },
    {
      id: 3,
      title: 'JavaScript : The Good Parts',
      author: 'Douglas Crockford',
      price: 50,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.75) {
          resolve(this.data);
        } else {
          reject(new Error('Outh!'));
        }
      }, 700);
    });
  }
}
