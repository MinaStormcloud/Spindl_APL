using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Spindl_APL.Server.Data;
using Spindl_APL.Server.Models;

namespace Spindl_APL.Server.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public LoginController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult> Login([FromBody] LoginDto dto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == dto.Email);

            if (user == null)
            {
                return BadRequest("User name or password incorrect");
            }

            return Ok(user);
        }
    }
}