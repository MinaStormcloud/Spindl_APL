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
                return Ok(new { result.Message });
            }

            return BadRequest(new { result.Message });
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(LoginDto account)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await _authService.LoginAsync(account);
            if (result.Succeeded)
            {
                return Ok(new { result.Message });
            }

            return Unauthorized(new { result.Message });
        }

        [HttpPost("logout")]
        public async Task<ActionResult> Logout() 
        { 
            var result = await _authService.LogoutAsync();
            return Ok(new { result.Message });
        }

        [HttpGet("role")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> GetUserRoles(string userName)
        {
            var result = await _authService.GetUserRolesAsync(userName);

            if (result.Succeeded)
            {
                return Ok(new { userName, result.Values });
            }

            return NotFound(new { userName });
        }

        [HttpPost("assign-role")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> AssignRole(string userName, string role)
        {
            var result = await _authService.AssignRoleToUserAsync(userName, role);

            if (result.Succeeded) 
            {
                var roles = await _authService.GetUserRolesAsync(userName);
                return Ok(new { userName, roles });
            }

            return NotFound(new { userName });
        }
    }
}
