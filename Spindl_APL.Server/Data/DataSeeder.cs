using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Spindl_APL.Server.Data.Entities;
using System.Text.Json;

namespace Spindl_APL.Server.Data
{
    public class DataSeeder
    {
        public static async Task SeedAsync(ApplicationDbContext context, IServiceProvider serviceProvider)
        {
            //Companies

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

            //Internships

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
                        internships[i].CompanyId = companies[i].Id;
                    }

                    await context.AddRangeAsync(internships);

                    await context.SaveChangesAsync();
                }
            }

            //Roles

            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();

            if (roleManager != null)
            {
                string[] roles = { "User", "Admin", "Employer", "Employee" };  //Add more roles to this array

                foreach (var role in roles)
                {
                    var existingRole = await roleManager.FindByNameAsync(role);

                    if (existingRole == null)
                    {
                        await roleManager.CreateAsync(new IdentityRole(role));
                    }
                }
            }

            //Accounts

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

                var adminResult = await userManager.CreateAsync(admin, "@Bc123");

                if (adminResult.Succeeded)
                {
                    await userManager.AddToRoleAsync(admin, "Admin");
                }

                var employer = new ApplicationUser()
                {
                    FirstName = "Em",
                    LastName = "Ployer",
                    UserName = "em@company.com",
                    Email = "em@company.com",
                    CompanyId = context.Companies.Where(c => c.Name == "Company.com").Select(c => c.Id).FirstOrDefault(),
                };

                var employerResult = await userManager.CreateAsync(employer, "@Bc123");

                if (employerResult.Succeeded)
                {
                    await userManager.AddToRoleAsync(employer, "Employer");
                }

                var employee = new ApplicationUser()
                {
                    FirstName = "Job",
                    LastName = "Worker",
                    UserName = "job@company.com",
                    Email = "job@company.com",
                    CompanyId = context.Companies.Where(c => c.Name == "Company.com").Select(c => c.Id).FirstOrDefault(),
                };

                var employeeResult = await userManager.CreateAsync(employee, "@Bc123");

                if (employeeResult.Succeeded)
                {
                    await userManager.AddToRoleAsync(employee, "Employee");
                }

                var user = new ApplicationUser()
                {
                    FirstName = "John",
                    LastName = "Doe",
                    UserName = "john@test.com",
                    Email = "john@test.com",
                };

                var userResult = await userManager.CreateAsync(user, "@Bc123");

                if (userResult.Succeeded)
                {
                    await userManager.AddToRoleAsync(user, "User");
                }
            }

            //Bookings

            if (!context.Bookings.Any())
            {
                List<Booking> bookings = context.Bookings.ToList();
                List<ApplicationUser> users = context.Accounts.ToList();

                var generator = new Random();

                var daysToAdd = generator.NextDouble() * 50.0 + 10.0;  //Between 10 and 60 days

                //Booking between employer and employee
                bookings.Add(new Booking
                {
                    BookingDate = DateTime.Now.AddDays(daysToAdd),
                    InitiatorId = users[1].Id,
                    Initiator = users[1],
                    ReceiverId = users[2].Id,
                    Receiver = users[2],
                });

                daysToAdd = generator.NextDouble() * 50.0 + 10.0;

                //Employee and user
                bookings.Add(new Booking
                {
                    BookingDate = DateTime.Now.AddDays(daysToAdd),
                    InitiatorId = users[2].Id,
                    Initiator = users[2],
                    ReceiverId = users[3].Id,
                    Receiver = users[3],
                });

                daysToAdd = generator.NextDouble() * 50.0 + 10.0;

                //Employer and user
                bookings.Add(new Booking
                {
                    BookingDate = DateTime.Now.AddDays(daysToAdd),
                    InitiatorId = users[1].Id,
                    Initiator = users[1],
                    ReceiverId = users[3].Id,
                    Receiver = users[3],
                });

                await context.AddRangeAsync(bookings);

                await context.SaveChangesAsync();
            }
        }
    }
}
