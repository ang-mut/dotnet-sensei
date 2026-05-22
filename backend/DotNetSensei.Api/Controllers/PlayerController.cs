using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using DotNetSensei.Api.Data;
using DotNetSensei.Api.Models;

namespace DotNetSensei.Api.Controllers;

[ApiController]
[Route("player")]
public class PlayerController : ControllerBase
{
    private readonly AppDbContext _context;

    public PlayerController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetPlayer()
    {
        var player = await _context.Players.FirstOrDefaultAsync();

        if (player == null)
        {
            player = new Player
            {
                Name = "Angel",
                Level = 1,
                Xp = 0,
                Rank = "🌱 Aprendiz"
            };

            _context.Players.Add(player);

            await _context.SaveChangesAsync();
        }

        return Ok(player);
    }

    [HttpPut]
    public async Task<IActionResult> UpdatePlayer(Player updatedPlayer)
    {
        var player = await _context.Players
            .FirstOrDefaultAsync();

        if (player == null)
        {
            return NotFound();
        }

        player.Level = updatedPlayer.Level;
        player.Xp = updatedPlayer.Xp;
        player.Rank = updatedPlayer.Rank;

        await _context.SaveChangesAsync();

        return Ok(player);
    }
}