using Spindl_APL.Server.Data;
using Spindl_APL.Server.Data.Entities;
using Spindl_APL.Server.Data.Repositories.Interfaces;

namespace Spindl_APL.Server.Data.Repositories
{
    public class BookingRepository : Repository<Booking>, IBookingRepository
    {
        public BookingRepository(ApplicationDbContext context) : base(context) { }
    }
}
