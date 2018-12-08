using BookManagement.Data.Models;
using BookManagement.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookManagement.Data.Services
{
    public class BookService : IBookService
    {
        private IBookUnitOfWorkFactory bookUnitOfWorkFactory;

        public BookService(IBookUnitOfWorkFactory bookUnitOfWokFactoy)
        {
            this.bookUnitOfWorkFactory = bookUnitOfWokFactoy;
        }

        public IEnumerable<Book> GetAll()
        {
            using (var uow = this.bookUnitOfWorkFactory.CreateNew())
            {
                var queryList =uow.Books.Find(book => book.IsDeleted==false);
                return queryList;
            }
        }

        public Book GetById(Guid id)
        {
            using (var uow = this.bookUnitOfWorkFactory.CreateNew())
            {
                var queryBook = uow.Books.Find(book =>book.Id==id & book.IsDeleted == false).FirstOrDefault();
                if(queryBook!=default(Book))
                {
                    return queryBook;
                }
                else
                {
                    throw new Exception(string.Format("Can't find book with the id of {0}", id.ToString()));
                }
            }
        }

        public void Delete(Book model)
        {
            using (var uow = this.bookUnitOfWorkFactory.CreateNew())
            {
                var queryBook = uow.Books.Find(book => book.Id == model.Id
                    & book.Title.ToUpper() == model.Title.ToUpper()
                    & book.Author.ToUpper() == model.Author.ToUpper()
                    & book.IsDeleted == false).FirstOrDefault();

                if(queryBook!=default(Book))
                {
                    uow.Books.Remove(queryBook);

                    uow.SaveChanges();

                    var verifyBook = uow.Books.Find(book => book.Id == model.Id
                        & book.Title.ToUpper() == model.Title.ToUpper()
                        & book.Author.ToUpper() == model.Author.ToUpper()
                        & book.IsDeleted == true).FirstOrDefault();

                    if(verifyBook!=default(Book))
                    {
                        throw new Exception("Delete failed!");
                    }                    
                }
                else
                {
                    throw new Exception("Book not found!");
                }
            }
        }

        public Guid Create(Book model)
        {
            using (var uow = this.bookUnitOfWorkFactory.CreateNew())
            {

                var queryBook = uow.Books.Find(book => book.Title.ToUpper() == model.Title.ToUpper()
                   & book.Author.ToUpper() == model.Author.ToUpper()
                   & book.IsDeleted == false).FirstOrDefault();

                if (queryBook == default(Book))
                {
                    model.Id = Guid.NewGuid();

                    uow.Books.Add(model);

                    uow.SaveChanges();

                    var verifyBook = uow.Books.Find(book => book.Id == model.Id
                        & book.Title.ToUpper() == model.Title.ToUpper()
                        & book.Author.ToUpper() == model.Author.ToUpper()
                        & book.IsDeleted == false).FirstOrDefault();

                    if(verifyBook==default(Book))
                    {
                        throw new Exception("Book Creation failed");
                    }
                    else
                    {
                        return verifyBook.Id;
                    }
                }
                else
                {
                    throw new Exception("Can't create book, a duplicate book found!"); 
                }
               
            }
        }

        public Book Update(Book model)
        {
            using (var uow = this.bookUnitOfWorkFactory.CreateNew())
            {
                var queryBook = uow.Books.Find(book => book.Id == model.Id
                & book.IsDeleted == false).FirstOrDefault();

                if(queryBook!=default(Book))
                {
                    queryBook.Title = model.Title;

                    queryBook.Author = model.Author;

                    uow.SaveChanges();

                    var verifyBook = uow.Books.Find(book => book.Id == model.Id
                    & book.Title.ToUpper() == model.Title.ToUpper()
                    & book.Author.ToUpper() == model.Author.ToUpper()
                    & book.IsDeleted == false).FirstOrDefault();

                    if (verifyBook == default(Book))
                    {
                        throw new Exception("Book update failed");
                    }
                    else
                    {
                        return verifyBook;
                    }

                }
                else
                {
                    throw new Exception("Book not found!");
                }                
            }
        }
    }
}