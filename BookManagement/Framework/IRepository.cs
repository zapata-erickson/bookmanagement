using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace BookManagement.Framework
{
    public interface IRepository<T>
    {
        IEnumerable<T> Find(Expression<Func<T, bool>> whereExpression);
        void Add(T item);
        void Remove(T item);
    }
}
