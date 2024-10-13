using Microsoft.AspNetCore.Identity;
using Spindl_APL.Server.Models;
using Spindl_APL.Server.Models.DTOs;

namespace Spindl_APL.Server.Services
{
    public interface IAuthService
    {
        Task<Response> RegisterAsync(RegisterDto user);
        Task<Response> LoginAsync(LoginDto user);
        Task LogoutAsync();
        Task<Response> CreateRoleAsync(IdentityRole role);
        Task<Response> AssignRoleAsync(IdentityRole role);
        Task<Response> GetUserRolesAsync(string user);
    }
}
