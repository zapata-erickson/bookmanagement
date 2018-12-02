using System;
using System.Data.Entity.Migrations;
using BookManagement.Data.Models;
using BookManagement.Data.Repositories;

namespace BookManagement.Configuration.Migrations
{
    public sealed class BookDbConfiguration : DbMigrationsConfiguration<BookDbContext>
    {
        public BookDbConfiguration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(BookDbContext context)
        {
            context.Books.AddOrUpdate(
                    new Book{ Id = Guid.NewGuid(), Title = "Doomsday Conspiracy", Author = "Sydney Sheldon" , IsDeleted=false, CreateOn = DateTime.Now },
                    new Book{ Id = Guid.NewGuid(), Title = "Undocumented DOS", Author = "Ray Duncan", IsDeleted = false, CreateOn = DateTime.Now },
                    new Book{ Id = Guid.NewGuid(), Title = "PC Upgrading/Repair", Author = "Unknown", IsDeleted = false, CreateOn = DateTime.Now },
                    new Book{ Id = Guid.NewGuid(), Title = "Bourne Ultimatum", Author = "Robert Ludlum", IsDeleted = false, CreateOn = DateTime.Now },
                    new Book{ Id = Guid.NewGuid(), Title = "Interview with the Vampire", Author = "Ann Rice", IsDeleted = false, CreateOn = DateTime.Now }
                );
            context.SaveChanges();
        }
    }
}