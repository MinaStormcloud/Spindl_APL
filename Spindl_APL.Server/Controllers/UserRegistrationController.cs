namespace Spindl_APL.Server.Models
    [HttpPost]
    [Route("api/register")]
    public async Task<IActionResult> Register([FromBody] RegisterDto dto)
{
    // Checks for duplicate usernames
    var existingUser = await _context.Users
        .FirstOrDefaultAsync(u => u.Email == dto.Email || u.Username == dto.Username);
    if (existingUser != null)
    {
        return BadRequest("Username allready in use")
    }
    var passwordHasher = new PasswordHasher();
    string passwordHash = passwordHasher.HashPassword(dto.Password);

    var user = new User
    {
        Username = dto.Username,
        Email = dto.Email,
        PasswordHash = passwordHash,
    };

    _context.Users.Add(user);
    await _context.SaveChangesAsync();

    return Ok("Account created");
}