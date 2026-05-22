using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using DotNetSensei.Api.Data;

namespace DotNetSensei.Api.Controllers;

[ApiController]
[Route("missions")]
public class MissionController : ControllerBase
{
    private readonly AppDbContext _context;

    public MissionController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetMissions()
    {
        var missions = await _context.Missions.ToListAsync();

        return Ok(missions);
    }
}