using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Spindl_APL.Server.Data;
using Spindl_APL.Server.Models;

namespace Spindl_APL.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CompanyController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Company>>> GetAll()
        {
            var companies = await _context.Companies.ToListAsync();

            if (companies.Count == 0)
            {
                return NotFound("No companies in database");
            }

            return Ok(companies);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Company>> GetById(int id)
        {
            var company = await _context.Companies.FindAsync(id);

            if (company == null)
            {
                return NotFound("Company not found");
            }

            return Ok(company);
        }

        [HttpPost("search")]
        public async Task<ActionResult<List<Company>>> Search(SearchDto search)
        {
            List<Company> companies;

            if (search.Location == "")
            {
                companies = await _context.Companies
                    .Include(c => c.Internships.Where(i => i.NumberOfStudents >= search.NumberOfStudents))
                    .Where(c => c.Internships.Any(i => i.NumberOfStudents >= search.NumberOfStudents))
                    .ToListAsync();
            }
            else if (search.NumberOfStudents == -1)
            {
                companies = await _context.Companies
                    .Include(c => c.Internships)
                    .Where(c => c.Location == search.Location)
                    .ToListAsync();
            }
            else
            {
                companies = await _context.Companies
                    .Include(c => c.Internships.Where(i => i.NumberOfStudents >= search.NumberOfStudents))
                    .Where(c => c.Location == search.Location && c.Internships.Any(i => i.NumberOfStudents >= search.NumberOfStudents))
                    .ToListAsync();
            }
            
            if (companies.Count == 0)
            {
                return NotFound("No companies found");
            }

            return Ok(companies);
        }
    }
}
