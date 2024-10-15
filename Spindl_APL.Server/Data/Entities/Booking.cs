using System.ComponentModel.DataAnnotations;

namespace Spindl_APL.Server.Data.Entities
{
    public class Booking
    {
        public int BookingId { get; set; }
        public DateTime Date { get; set; }
        [Required]
        public int CompanyId { get; set; }
        public virtual Company Company { get; set; }
        [Required]
        public virtual ApplicationUser Account { get; set; }
    }
}
