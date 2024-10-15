namespace Spindl_APL.Server.Data.Entities
{
    public class Response
    {
        public string? Message { get; set; }
        public ICollection<string>? Values { get; set; }
        public bool Succeeded { get; set; }
    }
}
