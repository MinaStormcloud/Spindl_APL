using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Spindl_APL.Server.Models;
using System.Text.Json;

namespace Spindl_APL.Server.Data
{
    public class DataSeeding
    {
        public static async Task SeedAsync(ApplicationDbContext context, IServiceProvider serviceProvider)
        {
            string jsonString;

            if (!context.Companies.Any())
            {
                jsonString = File.ReadAllText("companies.json");
                JsonSerializerOptions options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };
                List<Company>? companies = JsonSerializer.Deserialize<List<Company>>(jsonString, options);

                if (companies != null)
                {
                    await context.AddRangeAsync(companies);

                    await context.SaveChangesAsync();
                }
            }

            if (!context.Internships.Any())
            {
                jsonString = File.ReadAllText("internships.json");
                JsonSerializerOptions options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };
                List<Internship>? internships = JsonSerializer.Deserialize<List<Internship>>(jsonString, options);
                List<Company>? companies = context.Companies.ToList();

                if (internships != null)
                {
                    for (int i = 0; i < internships.Count; i++)
                    {
                        internships[i].CompanyId = companies[i].CompanyId;
                    }

                    await context.AddRangeAsync(internships);

                    await context.SaveChangesAsync();
                }  
            }
            
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();

            if (roleManager != null)
            {
                string[] roles = { "User", "Admin" };  //Add more roles to this array

                foreach (var role in roles)
                {
                    var existingRole = await roleManager.FindByNameAsync(role);

                    if (existingRole == null)
                    {
                        await roleManager.CreateAsync(new IdentityRole(role));
                    }
                }
            }
            
            var userManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();

            if (userManager != null)
            {
                var admin = new ApplicationUser()
                { 
                    FirstName = "Admin",
                    LastName = "",
                    UserName = "admin@test.com",
                    Email = "admin@test.com",
                };

                var result = await userManager.CreateAsync(admin, "@Bc123");

                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(admin, "Admin");
                }
            }
        }
    }
}
