using System.ComponentModel.DataAnnotations;

namespace Spindl_APL.Server.Data.Entities
{
    public class Booking
    {
        public int Id { get; set; }
        public DateTime BookingDate { get; set; }
        public bool IsConfirmed { get; set; } = false;
        public string InitiatorId { get; set; } = null!;
        public ApplicationUser Initiator { get; set; } = null!;
        public string ReceiverId { get; set; } = null!;
        public ApplicationUser Receiver { get; set; } = null!;
    }
}
