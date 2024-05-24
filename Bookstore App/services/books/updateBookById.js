// import bookData from '../../data/books.json' assert { type: 'json' }
// import NotFoundError from '../../errors/NotFoundError.js'

// const updateBookById = (id, title, author, isbn, pages, available, genre) => {
//   const book = bookData.books.find(book => book.id === id)

//   if (!book) {
//     throw new NotFoundError('Book', id)
//   }

//   book.title = title ?? book.title
//   book.author = author ?? book.author
//   book.isbn = isbn ?? book.isbn
//   book.pages = pages ?? book.pages
//   book.available = available ?? book.available
//   book.genre = genre ?? book.genre

//   return book
// }

// export default updateBookById

import { PrismaClient } from '@prisma/client';
import NotFoundError from '../../errors/NotFoundError.js';

const updateBookById = async (
  id,
  title,
  author,
  isbn,
  pages,
  available,
  genre
) => {
  const prisma = new PrismaClient();
  const updatedBook = await prisma.book.updateMany({
    where: {
      id,
    },
    data: {
      title,
      author,
      isbn,
      pages,
      available,
      genre,
    },
  });

  if (!updatedBook || updatedBook.count === 0) {
    throw new NotFoundError('Book', id);
  }

  return {
    message: `Book with id ${id} was updated!`,
  };
};

export default updateBookById;
