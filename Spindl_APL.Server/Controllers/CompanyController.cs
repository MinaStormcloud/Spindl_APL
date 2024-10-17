using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Spindl_APL.Server.Data;
using Spindl_APL.Server.Data.Entities;
using Spindl_APL.Server.DTOs;
using Spindl_APL.Server.Services.Interfaces;

namespace Spindl_APL.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CompanyController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly ICompanyService _companyService;

        public CompanyController(ApplicationDbContext context, ICompanyService companyService)
        {
            _context = context;
            _companyService = companyService;
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
        public async Task<ActionResult<List<Company>>> Search([FromBody] SearchDto search)
        {
            if (search == null)
            {
                return BadRequest();
            }

            IEnumerable<Company> companies = await _companyService.Search(search);

            if (!companies.Any())
            {
                return NotFound();
            }

            return Ok(companies);
        }
    }
}
