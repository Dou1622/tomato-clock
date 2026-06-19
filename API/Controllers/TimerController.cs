using API.Repositories;
using Microsoft.AspNetCore.Mvc;
using Timer = API.Repositories.Timer;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class TimerController : ControllerBase
{
    private readonly TimerRepository repository;
    public TimerController(TimerRepository repository)
    {
        this.repository = repository;
    }

    [HttpGet]
    public async Task<IEnumerable<Timer>> Get()
    {
        return await repository.GetAll();
    }
}
