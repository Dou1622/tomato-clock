
using System.Data;
using System.Data.Common;
using Dapper;

namespace API.Repositories
{
    public class Timer
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public DateTime StartTimeUtc { get; set; }
        public DateTime? EndTimeUtc { get; set; }
    }

    public class TimerRepository
    {
        private readonly IDbConnection _dbConnection;
        public TimerRepository(IDbConnection conn)
        {
            _dbConnection = conn;
        }

        public Task<IEnumerable<Timer>> GetAll()
        {
            var sql = @$"
            select *
            from Timer
            ";
            return _dbConnection.QueryAsync<Timer>(sql);
        }

    }

}