using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookManagement.Framework
{
    public interface IAuditable
    {
        bool IsDeleted { get; set; }
        DateTime CreateOn { get; set; }
        DateTime? ModifiedOn { get; set; }
    }
}
