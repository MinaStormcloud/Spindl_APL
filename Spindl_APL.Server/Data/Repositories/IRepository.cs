﻿namespace Spindl_APL.Server.Data.Repositories
{
    public interface IRepository<T> where T : class
    {
        IQueryable<T> GetQueryable();
        Task<List<T>> GetAllAsync();
        Task<T?> GetByIdAsync(int id);
        Task AddAsync(T entity);
        void Update(T entity);
        void Delete(T entity);
        Task DeleteByIdAsync(int id);
        Task SaveChangesAsync();
    }
}
