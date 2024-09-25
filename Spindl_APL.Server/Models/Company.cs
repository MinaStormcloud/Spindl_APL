using System.ComponentModel.DataAnnotations;

namespace Spindl_APL.Server.Models
{
    public class Company
    {
        public int CompanyId { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public string Contact { get; set; }
        public virtual ICollection<Booking> Bookings { get; set; } = new HashSet<Booking>();
        public virtual ICollection<Internship> Internships { get; set; } = new HashSet<Internship>();
        public virtual ICollection<Category> Categories { get; set; } = new HashSet<Category>();
    }
}
