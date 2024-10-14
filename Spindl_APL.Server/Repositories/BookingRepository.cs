using Spindl_APL.Server.Data;
using Spindl_APL.Server.Models;

namespace Spindl_APL.Server.Repositories
{
    public class BookingRepository : Repository<Booking>
    {
        public BookingRepository(ApplicationDbContext context) : base(context) { }
    }
}
