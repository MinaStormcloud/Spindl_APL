using System.ComponentModel.DataAnnotations;

namespace Spindl_APL.Server.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PasswordHash { get; set; }
        public string Role { get; set; }
        public virtual ICollection<Booking> Bookings { get; set; } = new HashSet<Booking>();
    }
}
