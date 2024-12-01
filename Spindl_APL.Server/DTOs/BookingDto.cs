namespace Spindl_APL.Server.DTOs
{
    public class BookingDto
    {
        public bool IsConfirmed { get; set; }
        public DateTime BookingDate { get; set; }
        public UserDto Initiator { get; set; } = null!;
        public UserDto Receiver { get; set; } = null!;
    }
}
