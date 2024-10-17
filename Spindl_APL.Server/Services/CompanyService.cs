using Microsoft.EntityFrameworkCore;
using Spindl_APL.Server.Data.Entities;
using Spindl_APL.Server.Data.UnitOfWork;
using Spindl_APL.Server.DTOs;
using Spindl_APL.Server.Services.Interfaces;

namespace Spindl_APL.Server.Services
{
    public class CompanyService : ICompanyService
    {
        private readonly IUnitOfWork _unitOfWork;

        public CompanyService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<List<Company>> GetAllCompaniesAsync()
        {
            return await _unitOfWork.Companies.GetAllAsync();
        }

        public async Task<Company?> GetCompanyByIdAsync(int id)
        {
            return await _unitOfWork.Companies.GetByIdAsync(id);
        }

        public async Task<List<Company>> Search(SearchDto search)
        {
            var query = _unitOfWork.Companies.GetQueryable();

            if (search.NumberOfStudents != null)
            {
                query = query.Include(c => c.Internships.Where(i => i.NumberOfStudents >= search.NumberOfStudents));
                
                if (!string.IsNullOrEmpty(search.Location))
                {
                    query = query.Where(c => c.Location == search.Location && c.Internships.Any(i => i.NumberOfStudents >= search.NumberOfStudents));
                }
                else
                {
                    query = query.Where(c => c.Internships.Any(i => i.NumberOfStudents >= search.NumberOfStudents));
                }
            }
            else if (!string.IsNullOrEmpty(search.Location))
            {
                query = query.Include(c => c.Internships)
                             .Where(c => c.Location == search.Location);
            }

            // Both null at the same time should be checked by the controller

            return await query.ToListAsync();
        }
    }
}
