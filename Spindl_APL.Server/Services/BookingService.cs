using Spindl_APL.Server.Data.UnitOfWork;
using Spindl_APL.Server.Services.Interfaces;

namespace Spindl_APL.Server.Services
{
    public class BookingService : IBookingService
    {
        private readonly IUnitOfWork _unitOfWork;

        public BookingService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork; 
        }
    }
}
