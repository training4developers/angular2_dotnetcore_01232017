using Microsoft.EntityFrameworkCore;
using Training4Developers.Data.Models;

namespace Training4Developers.Data
{
	public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Widget> Widgets { get; set; }
    }
}