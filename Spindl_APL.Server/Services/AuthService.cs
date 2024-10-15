using Microsoft.AspNetCore.Identity;
using Spindl_APL.Server.DTOs;
using Spindl_APL.Server.Data.Entities;
using Spindl_APL.Server.Services.Interfaces;

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
                return new Response() 
                { 
                    Message = "User added successfully", 
                    Succeeded = true 
                };
            }
            return new Response() 
            { 
                Message = string.Join("; ", result.Errors.Select(e => e.Description)), 
                Succeeded = false 
            };
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
        public async Task<Response> LogoutAsync()
        {
            await _signInManager.SignOutAsync();

            return new Response()
            {
                Message = "User logged out successfully",
                Succeeded = true
            };
        }

        public async Task<Response> CreateRoleAsync(string role)
        {
            throw new NotImplementedException();
        }

        public async Task<Response> AssignRoleToUserAsync(string userName, string role)
        {
            var user = await _userManager.FindByNameAsync(userName);

            if (user == null) 
            {
                return new Response()
                {
                    Message = "User not found",
                    Succeeded = false
                };
            }

            var result = await _userManager.AddToRoleAsync(user, role);

            if (result.Succeeded)
            {
                return new Response() 
                { 
                    Message = $"Role {role} successfully added to user {userName}", 
                    Succeeded = true 
                };
            }

            return new Response() 
            { 
                Message = $"User {userName} already has role {role}", 
                Succeeded = false 
            };
        }

        public async Task<Response> GetUserRolesAsync(string userName)
        {
            var foundUser = await _userManager.FindByEmailAsync(userName);

            if (foundUser == null)
            {
                return new Response()
                {
                    Message = "User not found",
                    Succeeded = false
                };
            }

            var roles = await _userManager.GetRolesAsync(foundUser);

            return new Response()
            {
                Values = roles,
                Succeeded = true
            };
        }
    }
}
