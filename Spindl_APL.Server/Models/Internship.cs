using System.ComponentModel.DataAnnotations;

namespace Spindl_APL.Server.Models
{
    public class Internship
    {
        public int InternshipId { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }
        public int NumberOfStudents { get; set; }
        [Required]
        public int CompanyId { get; set; }
        public virtual Company Company { get; set; }
    }
}
