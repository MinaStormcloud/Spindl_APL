// Bara för att testa om man kan skapa sin egen, troligtvis inte 
namespace Spindl_APL.Server.Data
    public class PasswordHasher
{
    public string HashPassword(string password)
    {
        return BCrypt.Net.BCrypt.HashPassword(password);
    }
    public bool VerifyPassword(string password, string hash)
    {
        return BCrypt.Net.BCrypt.Verify(password, hash);
    }
}