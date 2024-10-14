using Spindl_APL.Server.Data;
using Spindl_APL.Server.Models;

namespace Spindl_APL.Server.Repositories
{
    public class CompanyRepository : Repository<Company>, ICompanyRepository
    {

        public CompanyRepository(ApplicationDbContext context) : base(context) { }
    }
}
