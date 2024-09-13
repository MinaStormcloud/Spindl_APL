using System.ComponentModel.DataAnnotations;

namespace Spindl_APL.Server.Models
{
    public class Category
    {
        [Key]
        public string Name { get; set; } = "";
        public ICollection<Company> Companies { get; set; } = new HashSet<Company>();
    }
}
