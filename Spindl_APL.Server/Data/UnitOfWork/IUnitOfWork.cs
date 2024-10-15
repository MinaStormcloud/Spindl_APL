using Spindl_APL.Server.Data.Repositories;
using Spindl_APL.Server.Data.Repositories.Interfaces;

namespace Spindl_APL.Server.Data.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        ICompanyRepository Companies { get; }
        IBookingRepository Bookings { get; }
        IInternshipRepository Internships { get; }
        Task<int> CompleteAsync();
    }
}
