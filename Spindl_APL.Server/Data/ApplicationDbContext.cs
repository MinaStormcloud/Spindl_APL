using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Spindl_APL.Server.Data.Entities;

namespace Spindl_APL.Server.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Internship> Internships { get; set; }
        public DbSet<ApplicationUser> Accounts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ApplicationUser>()
                .HasIndex(u => u.UserName).IsUnique();

            modelBuilder.Entity<ApplicationUser>()
                .HasMany(u => u.BookingsInitiated)
                .WithOne(b => b.Initiator)
                .HasForeignKey(b => b.InitiatorId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ApplicationUser>()
                .HasMany(u => u.BookingsReceived)
                .WithOne(b => b.Receiver)
                .HasForeignKey(b => b.ReceiverId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ApplicationUser>()
                .HasOne(u => u.Company)
                .WithMany(c => c.Employees)
                .HasForeignKey(u => u.CompanyId);
        }
    }
}
