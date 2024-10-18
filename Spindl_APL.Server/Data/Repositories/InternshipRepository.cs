using Spindl_APL.Server.Data.Entities;
using Spindl_APL.Server.Data.Repositories.Interfaces;

namespace Spindl_APL.Server.Data.Repositories
{
    public class InternshipRepository : Repository<Internship>, IInternshipRepository
    {
        public InternshipRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
