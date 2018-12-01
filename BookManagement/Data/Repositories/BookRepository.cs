using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using BookManagement.Data.Models;

namespace BookManagement.Data.Repositories
{
    public class BookRepository : IBookRepository
    {
        private BookDbContext bookDbContext;

        public BookRepository(BookDbContext bookDbContext)
        {
            this.bookDbContext = bookDbContext;
        }

        public IEnumerable<Book> Find(Expression<Func<Book, bool>> whereExpression)
        {
            return this.bookDbContext.Books.Where(whereExpression);
        }

        public void Add(Book item)
        {
            item.IsDeleted = false;

            item.CreateOn = DateTime.Now;

            this.Add(item);
        }

        public void Remove(Book item)
        {
            item.IsDeleted = true;

            item.ModifiedOn = DateTime.Now;

            this.Add(item);
        }
    }
}