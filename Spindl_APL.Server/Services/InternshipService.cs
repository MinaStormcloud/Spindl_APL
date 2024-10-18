using Spindl_APL.Server.Data.UnitOfWork;
using Spindl_APL.Server.Services.Interfaces;

namespace Spindl_APL.Server.Services
{
    public class InternshipService : IInternshipService
    {
        private readonly IUnitOfWork _unitOfWork;

        public InternshipService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
    }
}
