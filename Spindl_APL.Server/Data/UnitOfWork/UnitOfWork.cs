using Microsoft.Identity.Client;
using Spindl_APL.Server.Data.Repositories;
using Spindl_APL.Server.Data.Repositories.Interfaces;

namespace Spindl_APL.Server.Data.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;

        public ICompanyRepository Companies { get; }
        public IBookingRepository Bookings { get; }
        public IInternshipRepository Internships { get; }

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            Companies = new CompanyRepository(_context);
            Bookings = new BookingRepository(_context);
            Internships = new InternshipRepository(_context);
        }

        public async Task<int> CompleteAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
