using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookManagement.Framework
{
    public interface IEntity<TKey> where TKey: struct
    {
        TKey Id { get; set; }
    }
}
