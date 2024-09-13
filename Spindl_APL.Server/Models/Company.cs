namespace Spindl_APL.Server.Models
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public string Contact { get; set; }
        public ICollection<APL> APLs { get; set; } = new HashSet<APL>();
        public ICollection<Booking> Bookings { get; set; } = new HashSet<Booking>();
        public ICollection<Category> Categories { get; set; } = new HashSet<Category>();
    }
}
