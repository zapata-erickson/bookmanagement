﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookManagement.WebApi.Models
{
    public class GetBookModel
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
    }
}