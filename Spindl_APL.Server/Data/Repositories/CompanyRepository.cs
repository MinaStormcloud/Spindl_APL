using Spindl_APL.Server.Data.Entities;
using Spindl_APL.Server.Data.Repositories.Interfaces;

namespace Spindl_APL.Server.Data.Repositories
{
    public class CompanyRepository : Repository<Company>, ICompanyRepository
    {
        public CompanyRepository(ApplicationDbContext context) : base(context) { }
    }
}
