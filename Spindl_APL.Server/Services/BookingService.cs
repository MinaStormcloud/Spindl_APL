using Microsoft.EntityFrameworkCore;
using Spindl_APL.Server.Data.Entities;
using Spindl_APL.Server.Data.UnitOfWork;
using Spindl_APL.Server.DTOs;
using Spindl_APL.Server.Helpers;
using Spindl_APL.Server.Mappers;
using Spindl_APL.Server.Services.Interfaces;

namespace Spindl_APL.Server.Services
{
    public class BookingService : IBookingService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IAccountService _accountService;

        public BookingService(IUnitOfWork unitOfWork, IAccountService accountService)
        {
            _unitOfWork = unitOfWork;
            _accountService = accountService;
        }

        public async Task<ServiceResponse<string>> CreateBooking(BookingDto request)
        {
            var initiatorResult = await _accountService.GetUserIdAsync(request.Initiator.UserName);

            if (!initiatorResult.Succeeded)
            {
                return ServiceResponse<string>.FailureResponse(initiatorResult.Errors);
            }

            var receiverResult = await _accountService.GetUserIdAsync(request.Receiver.UserName);

            if (!receiverResult.Succeeded)
            {
                return ServiceResponse<string>.FailureResponse(receiverResult.Errors);
            }

            var booking = new Booking
            {
                InitiatorId = initiatorResult.Data,
                ReceiverId = receiverResult.Data,
                BookingDate = request.BookingDate,
                IsConfirmed = false
            };

            await _unitOfWork.Bookings.AddAsync(booking);

            int savedEntities = await _unitOfWork.CompleteAsync();

            if (savedEntities > 0)
            {
                return ServiceResponse<string>.SuccessResponse("Booking saved to database");
            }

            return ServiceResponse<string>.FailureResponse(["Booking could not be saved"]);
        }

        public async Task<ServiceResponse<List<BookingDto>>> GetBookingsForUserAsync(string userName)
        {
            var query = _unitOfWork.Bookings.GetQueryable();

            query = query
                .AsNoTracking()
                .Where(b => b.Initiator.UserName == userName || b.Receiver.UserName == userName)
                .Select(b => new Booking
                {
                    BookingDate = b.BookingDate,
                    IsConfirmed = b.IsConfirmed,
                    Initiator = b.Initiator,
                    Receiver = b.Receiver,
                });

            var bookings = await query.ToListAsync();

            if (bookings.Count == 0)
            {
                return ServiceResponse<List<BookingDto>>.FailureResponse([$"No bookings found for {userName}"]);
            }

            return ServiceResponse<List<BookingDto>>.SuccessResponse(BookingMapper.ToDtoList(bookings));
        }
    }
}
