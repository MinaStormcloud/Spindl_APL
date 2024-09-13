using System.ComponentModel.DataAnnotations;

namespace Spindl_APL.Server.Models
{
    public class APL
    {
        public int APLId { get; set; }
        public DateOnly DateFrom { get; set; }
        public DateOnly DateTo { get; set; }
        public int NumberOfStudents { get; set; }
        [Required]
        public int CompanyId { get; set; }
        public virtual Company Company { get; set; }
    }
}
