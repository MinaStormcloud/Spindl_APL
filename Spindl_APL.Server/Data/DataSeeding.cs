using Microsoft.EntityFrameworkCore;
using Spindl_APL.Server.Models;
using System.Text.Json;

namespace Spindl_APL.Server.Data
{
    public class DataSeeding
    {
        public static async Task SeedAsync(ApplicationDbContext context)
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
                await context.AddRangeAsync(companies);
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

                for (int i = 0; i < internships.Count; i++)
                {
                    internships[i].CompanyId = companies[i].CompanyId;  
                }

                await context.AddRangeAsync(internships);
            }
            await context.SaveChangesAsync();
            
        }
    }
}
