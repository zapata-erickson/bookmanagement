using BookManagement.Data;
using BookManagement.Data.Models;
using BookManagement.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;

namespace BookManagement.WebApi.Controllers
{
    [RoutePrefix("api/books")]
    public class BookController : ApiController
    {
        private IBookService bookService;

        public void BookControler(IBookService bookService)
        {
            this.bookService = bookService;
        }

        [HttpGet,Route("")]
        [ResponseType(typeof(IEnumerable<GetBookModel>))]
        public IHttpActionResult GetBooks()
        {
            try
            {
                var bookList = bookService.GetAll();
                var result = from book in bookList
                             select new GetBookModel { Id = book.Id, TItle = book.Title, Author = book.Author };
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet, Route("{id:Guid}")]
        [ResponseType(typeof(Book))]
        public IHttpActionResult GetBook(Guid id)
        {
            try
            {
                var queryBook = bookService.GetById(id);
                return Ok(queryBook);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost, Route("create")]
        public IHttpActionResult CreateBook(NewBookModel book)
        {
            try
            {
                var newBook = new Book { Title = book.TItle, Author = book.Author };

                bookService.Create(newBook);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost, Route("update")]
        public IHttpActionResult UpdateBook(GetBookModel book)
        {
            try
            {
                var updateBook = new Book { Id= book.Id, Title = book.TItle, Author = book.Author };

                bookService.Create(updateBook);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost, Route("delete")]
        public IHttpActionResult DeleteBook(GetBookModel book)
        {
            try
            {
                var deleteBook = new Book { Id = book.Id, Title = book.TItle, Author = book.Author };

                bookService.Delete(deleteBook);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}