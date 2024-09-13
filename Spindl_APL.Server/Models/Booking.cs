using System.ComponentModel.DataAnnotations;

namespace Spindl_APL.Server.Models
{
    public class Booking
    {
        public int BookingId { get; set; }
        public DateOnly Date { get; set; }
        [Required]
        public int CompanyId { get; set; }
        public virtual Company Company { get; set; }
        [Required]
        public int UserId { get; set; }
        public virtual User User { get; set; }

        }
}
