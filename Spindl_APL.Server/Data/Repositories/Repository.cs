using Microsoft.EntityFrameworkCore;

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
        }

        //This needs to be better
        public void Update(Tentity entity)
        {
            _dbSet.Update(entity);
        }

        //This as well
        public void Delete(Tentity entity)
        {
            _dbSet.Remove(entity);
        }

        public async Task DeleteByIdAsync(int id)
        {
            var entity = await _dbSet.FindAsync(id);

            if (entity != null)
            {
                _dbSet.Remove(entity);
            }
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
