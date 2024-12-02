using Spindl_APL.Server.DTOs;
using Spindl_APL.Server.Helpers;

namespace Spindl_APL.Server.Services.Interfaces
{
    public interface IBookingService
    {
        Task<ServiceResponse<string>> CreateBooking(BookingDto booking);
        Task<ServiceResponse<List<BookingDto>>> GetBookingsForUserAsync(string userName);
    }
}
