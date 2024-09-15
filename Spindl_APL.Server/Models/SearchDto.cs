using System.ComponentModel.DataAnnotations;

namespace Spindl_APL.Server.Models
{
    public class SearchDto
    {
        public string Location { get; set; } = string.Empty;
        public int NumberOfStudents { get; set; } = -1;
    }
}
