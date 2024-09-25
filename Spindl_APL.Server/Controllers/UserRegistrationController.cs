using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Spindl_APL.Server.Data;
using Spindl_APL.Server.Models;
using Spindl_APL.Server.Models.DTOs;

namespace Spindl_APL.Server.Controllers
{

    [Route("api/register")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult> Register([FromBody] RegisterDto dto)
        {
            // Checks for duplicate usernames
            var existingUser = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == dto.Email);

            if (existingUser != null)
            {
                return BadRequest("Username already in use");
            }

            var passwordHasher = new PasswordHasher();
            string passwordHash = passwordHasher.HashPassword(dto.Password);

            var user = new User
            {
                Email = dto.Email,
                //Password = passwordHash,
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("Account created");
        }
    }

}
