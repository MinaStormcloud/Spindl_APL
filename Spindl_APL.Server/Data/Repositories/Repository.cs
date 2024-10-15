using Microsoft.EntityFrameworkCore;
using Spindl_APL.Server.Data;

namespace Spindl_APL.Server.Data.Repositories
{
    public class Repository<Tentity> : IRepository<Tentity> where Tentity : class
    {
        protected readonly ApplicationDbContext _context;
        protected readonly DbSet<Tentity> _dbSet;

        public Repository(ApplicationDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<Tentity>();
        }

        public async Task<IEnumerable<Tentity>> GetAllAsync()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<Tentity?> GetByIdAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public async Task AddAsync(Tentity entity)
        {
            await _dbSet.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Tentity entity)
        {
            _dbSet.Update(entity);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(Tentity entity)
        {
            _dbSet.Remove(entity);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteByIdAsync(int id)
        {
            var entity = await _dbSet.FindAsync(id);

            if (entity != null)
            {
                _dbSet.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
