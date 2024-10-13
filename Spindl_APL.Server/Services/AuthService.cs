using Microsoft.AspNetCore.Identity;
using Spindl_APL.Server.Models;
using Spindl_APL.Server.Models.DTOs;

namespace Spindl_APL.Server.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AuthService(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, RoleManager<IdentityRole> roleManager) 
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
        }
        public async Task<Response> RegisterAsync(RegisterDto user)
        {
            var newUser = new ApplicationUser { FirstName = user.FirstName, LastName = user.LastName, Email = user.Email, UserName = user.Email };

            var result = await _userManager.CreateAsync(newUser, user.Password);

            if (result.Succeeded) 
            {
                return new Response() { Message = "User added successfully", Succeeded = true };
            }
            return new Response() { Message = string.Join("; ", result.Errors.Select(e => e.Description)), Succeeded = false };
            }

        public async Task<Response> LoginAsync(LoginDto user)
        {
            var result = await _signInManager.PasswordSignInAsync(user.Username, user.Password, true, false);

            return result.Succeeded ? new Response() 
            { 
                Message = "Login successful", 
                Succeeded = true 
            } 
            : new Response()
            {
                Message = "Login failed",
                Succeeded = false
            }; 
        }
        public async Task LogoutAsync()
        {
            await _signInManager.SignOutAsync();
        }
        public async Task<Response> CreateRoleAsync(IdentityRole role)
        {
            throw new NotImplementedException();
        }
        public async Task<Response> AssignRoleAsync(IdentityRole role)
        {
            throw new NotImplementedException();
        }
    }
}
