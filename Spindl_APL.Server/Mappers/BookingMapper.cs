using Spindl_APL.Server.Data.Entities;
using Spindl_APL.Server.DTOs;

namespace Spindl_APL.Server.Mappers
{
    public static class BookingMapper
    {
        public static BookingDto ToDto(Booking booking)
        {
            return new BookingDto
            {
                BookingDate = booking.BookingDate,
                IsConfirmed = booking.IsConfirmed,
                Initiator = UserMapper.ToDto(booking.Initiator),
                Receiver = UserMapper.ToDto(booking.Receiver),
            };
        }

        public static List<BookingDto> ToDtoList(IEnumerable<Booking> bookings)
        {
            return bookings.Select(ToDto).ToList();
        }
    }
}
