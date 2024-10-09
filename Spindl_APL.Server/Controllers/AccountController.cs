﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Spindl_APL.Server.Models;
using Spindl_APL.Server.Models.DTOs;

namespace Spindl_APL.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<Account> _userManager;
        private readonly SignInManager<Account> _signInManager;

        public AccountController(UserManager<Account> userManager, SignInManager<Account> signInManager) 
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost("register")]
        public async Task<ActionResult<Account>> CreateAsync(RegisterDto account)
        {
            var existingAccount = await _userManager.FindByEmailAsync(account.Email);

            if (existingAccount != null) 
            {
                return BadRequest();
            }

            var newAccount = new Account { FirstName = account.FirstName, LastName = account.LastName, Email = account.Email, UserName = account.Email};
            var result = await _userManager.CreateAsync(newAccount, account.Password);

            return Ok(result);
        }

        [HttpPost("login")]
        public async Task<ActionResult<Account>> SignInAsync(LoginDto account)
        {
            var signedIn = await _signInManager.PasswordSignInAsync(account.Username, account.Password, true, false);
            
            if (!signedIn.Succeeded)
            {
                return BadRequest();
            }

            return Ok(signedIn);
        }
    }
}