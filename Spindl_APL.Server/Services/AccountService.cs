﻿using Microsoft.AspNetCore.Identity;
using Spindl_APL.Server.DTOs;
using Spindl_APL.Server.Data.Entities;
using Spindl_APL.Server.Services.Interfaces;
using Spindl_APL.Server.Helpers;
using Spindl_APL.Server.Mappers;
using System.Security.Claims;

namespace Spindl_APL.Server.Services
{
    public class AccountService : IAccountService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AccountService(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
        }
        public async Task<ServiceResponse<string>> RegisterAsync(RegisterDto user)
        {
            var newUser = new ApplicationUser { FirstName = user.FirstName, LastName = user.LastName, Email = user.Email, UserName = user.Email };

            var userResult = await _userManager.CreateAsync(newUser, user.Password);

            if (userResult.Succeeded)
            {
                var roleResult = await _userManager.AddToRoleAsync(newUser, "User");

                if (roleResult.Succeeded)
                {
                    return ServiceResponse<string>.SuccessResponse($"User {user.Email} registered successfully");
                }

                await _userManager.DeleteAsync(newUser);
                return ServiceResponse<string>.FailureResponse(roleResult.Errors.Select(e => e.Description).ToList());
            }
            return ServiceResponse<string>.FailureResponse(userResult.Errors.Select(e => e.Description).ToList());
        }

        public async Task<ServiceResponse<string>> LoginAsync(LoginDto user)
        {
            var result = await _signInManager.PasswordSignInAsync(user.Username, user.Password, true, false);

            if (result.Succeeded)
            {
                return ServiceResponse<string>.SuccessResponse("Login successful");
            }

            return ServiceResponse<string>.FailureResponse(new List<string> { "Login failed" });
        }

        public async Task<ServiceResponse<string>> LogoutAsync()
        {
            await _signInManager.SignOutAsync();

            return ServiceResponse<string>.SuccessResponse("User logged out");
        }

        public async Task<ServiceResponse<string>> CreateRoleAsync(string role)
        {
            throw new NotImplementedException();
        }

        public async Task<ServiceResponse<string>> AssignRoleToUserAsync(string userName, string role)
        {
            var user = await _userManager.FindByNameAsync(userName);

            if (user == null)
            {
                return ServiceResponse<string>.FailureResponse(new List<string> { "User not found" });
            }

            var result = await _userManager.AddToRoleAsync(user, role);

            if (!result.Succeeded)
            {
                return ServiceResponse<string>.FailureResponse(result.Errors.Select(e => e.Description).ToList());
            }

            return ServiceResponse<string>.SuccessResponse($"Role {role} added to user {userName}");
        }

        public async Task<ServiceResponse<List<string>>> GetUserRolesAsync(string userName)
        {
            var foundUser = await _userManager.FindByEmailAsync(userName);

            if (foundUser == null)
            {
                return ServiceResponse<List<string>>.FailureResponse(new List<string> { "User not found" });
            }

            var roles = await _userManager.GetRolesAsync(foundUser);

            return ServiceResponse<List<string>>.SuccessResponse(roles.ToList());
        }

        public async Task<ServiceResponse<UserDto>> GetUserAsync(string userName)
        {
            var user = await _userManager.FindByEmailAsync(userName);

            if (user == null)
            {
                return ServiceResponse<UserDto>.FailureResponse(new List<string> { "User not found" });
            }

            return ServiceResponse<UserDto>.SuccessResponse(UserMapper.ToDto(user));
        }

        public async Task<ServiceResponse<string>> GetUserIdAsync(string userName)
        {
            var user = await _userManager.FindByEmailAsync(userName);

            if (user == null)
            {
                return ServiceResponse<string>.FailureResponse(new List<string> { "User not found" });
            }

            return ServiceResponse<string>.SuccessResponse(user.Id);
        }

        public bool IsUserAuthenticated(ClaimsPrincipal user)
        {
            if (user.Identity == null || !user.Identity.IsAuthenticated)
            {
                return false;
            }
            return true;
        }
    }
}
