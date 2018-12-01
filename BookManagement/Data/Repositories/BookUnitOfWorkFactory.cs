using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookManagement.Data.Repositories
{
    public class BookUnitOfWorkFactory : IBookUnitOfWorkFactory
    {
        public IBookUnitOfWork CreateNew()
        {
            return new BookDbContext();
        }
    }
}