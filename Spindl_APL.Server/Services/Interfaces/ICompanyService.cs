using Spindl_APL.Server.Data.Entities;
using Spindl_APL.Server.DTOs;

namespace Spindl_APL.Server.Services.Interfaces
{
    public interface ICompanyService
    {
        Task<IEnumerable<Company>> Search(SearchDto searchDto);
    }
}
