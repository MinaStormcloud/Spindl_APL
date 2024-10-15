using Spindl_APL.Server.Data;
using Spindl_APL.Server.Data.Entities;

namespace Spindl_APL.Server.Data.Repositories
{
    public class BookingRepository : Repository<Booking>
    {
        public BookingRepository(ApplicationDbContext context) : base(context) { }
    }
}
