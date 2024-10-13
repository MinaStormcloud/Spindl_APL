using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Spindl_APL.Server.Models;
using Spindl_APL.Server.Models.DTOs;

namespace Spindl_APL.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public AccountController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager) 
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost("register")]
        public async Task<ActionResult<ApplicationUser>> CreateAsync(RegisterDto account)
        {
            var existingAccount = await _userManager.FindByEmailAsync(account.Email);

            if (existingAccount != null) 
            {
                return BadRequest();
            }

            var newAccount = new ApplicationUser { FirstName = account.FirstName, LastName = account.LastName, Email = account.Email, UserName = account.Email};
            var result = await _userManager.CreateAsync(newAccount, account.Password);

            return Ok(new {Message = "Registration successful"});
        }

        [HttpPost("login")]
        public async Task<ActionResult<ApplicationUser>> SignInAsync(LoginDto account)
        {
            var signedIn = await _signInManager.PasswordSignInAsync(account.Username, account.Password, true, false);
            
            if (!signedIn.Succeeded)
            {
                return BadRequest();
            }

            return Ok(new {Message = "Login successful"});
        }
    }
}
