using System.ComponentModel.DataAnnotations;

namespace Spindl_APL.Server.Data.Entities
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Location { get; set; } = null!;
        public string Contact { get; set; }
        public virtual ICollection<ApplicationUser> Employees { get; set; } = new HashSet<ApplicationUser>();
        public virtual ICollection<Internship> Internships { get; set; } = new HashSet<Internship>();
        public virtual ICollection<Category> Categories { get; set; } = new HashSet<Category>();
    }
}
