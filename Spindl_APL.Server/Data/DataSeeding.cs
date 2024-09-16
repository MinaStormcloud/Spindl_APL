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
                jsonString = File.ReadAllText("internships.json");
                JsonSerializer.Deserialize<Company>(jsonString);
            }

            if (!context.Internships.Any())
            {

            }
            await context.SaveChangesAsync();
            
        }
    }
}
