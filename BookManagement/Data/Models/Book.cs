using BookManagement.Framework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BookManagement.Data.Models
{
    [Table("Books")]
    public class Book : IEntity<Guid>, IAuditable
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime CreateOn { get; set; }
        public DateTime? ModifiedOn { get; set; }
    }
}