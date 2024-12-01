using System.ComponentModel.DataAnnotations;

namespace Spindl_APL.Server.DTOs
{
    public class UserDto
    {
        [Required]
        public string UserName { get; set; } = string.Empty;
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? PhoneNumber { get; set; }
    }
}
