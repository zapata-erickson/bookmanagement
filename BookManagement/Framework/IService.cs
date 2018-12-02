using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookManagement.Framework
{
    public interface IService<TModel,Tkey> where TModel: class,new()
        where Tkey :struct
    {
        TModel GetById(Tkey id);
        IEnumerable<TModel> GetAll();
        void Delete(TModel model);
        TModel Update(TModel model);
        Guid Create(TModel model);
    }
}
