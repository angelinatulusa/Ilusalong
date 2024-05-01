using Microsoft.EntityFrameworkCore;
using Ilusalong.Models;
using System.Collections.Generic;

namespace Ilusalong.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Tooted> Toode { get; set; }
        public DbSet<Kategooriad> Kategooria { get; set; }
        public DbSet<Kasutajad> Kasutajad { get; set; }
        public DbSet<Protseduurid> Protseduurid { get; set; }
        public DbSet<Meistrid> Meistrid { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
    }
}
