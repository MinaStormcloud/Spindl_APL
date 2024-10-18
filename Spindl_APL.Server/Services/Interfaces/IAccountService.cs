using Microsoft.AspNetCore.Identity;
using Spindl_APL.Server.Data.Entities;
using Spindl_APL.Server.DTOs;
using Spindl_APL.Server.Helpers;

namespace Spindl_APL.Server.Services.Interfaces
{
    public interface IAccountService
    {
        Task<ServiceResponse<string>> RegisterAsync(RegisterDto user);
        Task<ServiceResponse<string>> LoginAsync(LoginDto user);
        Task<ServiceResponse<string>> LogoutAsync();
        Task<ServiceResponse<string>> CreateRoleAsync(string role);
        Task<ServiceResponse<string>> AssignRoleToUserAsync(string userName, string role);
        Task<ServiceResponse<List<string>>> GetUserRolesAsync(string userName);
    }
}
