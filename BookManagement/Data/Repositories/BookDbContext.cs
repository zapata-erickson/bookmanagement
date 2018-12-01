using System.Data.Entity;
using System.Linq;
using BookManagement.Data.Models;
using BookManagement.Framework;

namespace BookManagement.Data.Repositories
{
    public class BookDbContext : DbContext, IBookUnitOfWork , IBookDataContext
    {
        private IBookRepository bookRepository;
        public DbSet<Book> Books { get; set; }

        IBookRepository IBookUnitOfWork.Books
        {
            get
            {
                if(this.bookRepository==null)
                {
                    this.bookRepository = new BookRepository(this);
                }
                return this.bookRepository;
            }
        }

        IQueryable IBookDataContext.Books
        {
            get
            {
                return this.Books;
            }
        }

        public BookDbContext() : base("BookDb")
        {

        }

        void IUnitOfWork.SaveChanges()
        {
            this.SaveChanges();
        }
    }
}