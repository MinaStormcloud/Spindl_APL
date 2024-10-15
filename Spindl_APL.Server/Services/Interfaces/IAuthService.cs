using Microsoft.AspNetCore.Identity;
using Spindl_APL.Server.Data.Entities;
using Spindl_APL.Server.DTOs;

namespace Spindl_APL.Server.Services.Interfaces
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
