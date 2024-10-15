using System.ComponentModel.DataAnnotations;

namespace Spindl_APL.Server.Data.Entities
{
    public class Category
    {
        [Key]
        public string Name { get; set; } = "";
        public virtual ICollection<Company> Companies { get; set; } = new HashSet<Company>();
    }
}
