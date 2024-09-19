namespace Spindl_APL.Server.Models
    [HttpPost]
    [Route("api/login")]
    public async Task<IActionResult> Login([FromBody] LoginDto dto)
{
    var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == dto.Email);

    if (user == null)
    {

    }
}