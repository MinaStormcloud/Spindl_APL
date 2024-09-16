using Microsoft.EntityFrameworkCore;
using Spindl_APL.Server.Models;

namespace Spindl_APL.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Internship> Internships { get; set; }
        public DbSet<User> Users { get; set; }
        public Dbset<SeedingCompany> SeedingCompanies { get; set; }
    }
}
