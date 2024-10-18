using Spindl_APL.Server.Data.Entities;
using Spindl_APL.Server.DTOs;

namespace Spindl_APL.Server.Services.Interfaces
{
    public interface ICompanyService
    {
        Task<List<Company>> GetAllCompaniesAsync();
        Task<Company?> GetCompanyByIdAsync(int id);
        Task<List<Company>> Search(SearchDto searchDto);
    }
}
