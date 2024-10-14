using Microsoft.AspNetCore.Identity;
using Spindl_APL.Server.Models;
using Spindl_APL.Server.Models.DTOs;

namespace Spindl_APL.Server.Services
{
    public interface IAuthService
    {
        Task<Response> RegisterAsync(RegisterDto user);
        Task<Response> LoginAsync(LoginDto user);
        Task<Response> LogoutAsync();
        Task<Response> CreateRoleAsync(string role);
        Task<Response> AssignRoleToUserAsync(string userName, string role);
        Task<Response> GetUserRolesAsync(string userName);
    }
}
