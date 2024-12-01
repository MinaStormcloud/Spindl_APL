using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Spindl_APL.Server.DTOs;
using Spindl_APL.Server.Services.Interfaces;

namespace Spindl_APL.Server.Controllers
{
    [Route("api/")]
    [ApiController]
    [Authorize]
    public class BookingController : ControllerBase
    {
        private readonly IBookingService _bookingService;

        public BookingController(IBookingService bookingService)
        {
            _bookingService = bookingService;
        }

        [HttpPost("booking/create")]
        public async Task<IActionResult> CreateBooking([FromBody] BookingDto booking)
        {
            var result = await _bookingService.CreateBooking(booking);

            if (!result.Succeeded)
            {
                return NotFound(result.Errors);
            }

            return Ok();
        }

        [HttpPost("user/booking")]
        public async Task<IActionResult> GetUserBookings([FromBody] UserDto user)
        {
            var result = await _bookingService.GetBookingsForUserAsync(user.UserName);

            if (!result.Succeeded)
            {
                return NotFound(result.Errors);
            }

            return Ok(result.Data);
        }
    }
}
