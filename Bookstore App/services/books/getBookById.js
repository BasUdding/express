// import bookData from '../../data/books.json' assert { type: 'json' }
// import NotFoundError from '../../errors/NotFoundError.js'

// const getBookById = (id) => {
//   const book = bookData.books.find(book => book.id === id)

//   if (!book) {
//     throw new NotFoundError('Book', id)
//   }

//   return book
// }

// export default getBookById

import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

const getBookById = async (id) => {
  const prisma = new PrismaClient();
  const book = await prisma.book.findUnique({
    where: {
      id,
    },
  });

  if (!book) {
    throw new NotFoundError('Book', id);
  }

  return book;
};

export default getBookById;
