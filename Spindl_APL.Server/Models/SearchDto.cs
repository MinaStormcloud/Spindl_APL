using System.ComponentModel.DataAnnotations;

namespace Spindl_APL.Server.Models
{
    public class SearchDto
    {
        public string? Location { get; set; }
        public int NumberOfStudents { get; set; }
    }
}
