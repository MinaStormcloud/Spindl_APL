using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Spindl_APL.Server.Data.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        // Null for all users that doesn't work at a company
        public int? CompanyId { get; set; }
        public Company? Company { get; set; }
        public ICollection<Booking> BookingsInitiated { get; set; } = new HashSet<Booking>();
        public ICollection<Booking> BookingsReceived { get; set; } = new HashSet<Booking>();
    }
}
