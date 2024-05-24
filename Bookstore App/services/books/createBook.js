// import bookData from '../../data/books.json' assert { type: 'json' }
// import { v4 as uuid } from 'uuid'

// const createBook = (title, author, isbn, pages, available, genre) => {
//   const newBook = {
//     id: uuid(),
//     title,
//     author,
//     isbn,
//     pages,
//     available,
//     genre
//   }

//   bookData.books.push(newBook)
//   return newBook
// }

// export default createBook

import { PrismaClient } from '@prisma/client';

const createBook = async (title, author, isbn, pages, available, genre) => {
  const prisma = new PrismaClient();

  return prisma.book.create({
    data: {
      title,
      author,
      isbn,
      pages,
      available,
      genre,
    },
  });
};

export default createBook;
