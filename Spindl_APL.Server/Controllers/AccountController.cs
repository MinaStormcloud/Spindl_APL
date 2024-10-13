using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Spindl_APL.Server.Models;
using Spindl_APL.Server.Models.DTOs;
using Spindl_APL.Server.Services;

namespace Spindl_APL.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AccountController(IAuthService authService) 
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterDto account)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await _authService.RegisterAsync(account);

            if (result.Succeeded) 
            {
                return Ok(new { result.Message, result.Succeeded });
            }

            return BadRequest(new { result.Message, result.Succeeded });
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(LoginDto account)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await _authService.LoginAsync(account);
            if (result.Succeeded)
            {
                return Ok(new { result.Message, result.Succeeded });
            }

            return Unauthorized(new { result.Message, result.Succeeded });
        }

        [HttpPost("logout")]
        public async Task<ActionResult> Logout() 
        { 
            await _authService.LogoutAsync();
            return Ok(new { Message = "User logged out successfully" });
        }

        [HttpGet("role")]
        [Authorize]
        public async Task<ActionResult> GetUserRoles(string user)
        {
            var result = await _authService.GetUserRolesAsync(user);

            if (result.Succeeded)
            {
                return Ok(new { user, result.Values });
            }

            return NotFound(new { user, result.Succeeded });
        }
    }
}
