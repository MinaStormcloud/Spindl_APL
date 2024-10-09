using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Spindl_APL.Server.Models
{
    public class Account : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public virtual ICollection<Booking> Bookings { get; set; } = new HashSet<Booking>();
    }
}
