namespace DotNetSensei.Api.Models;

public class Player
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public int Level { get; set; }

    public int Xp { get; set; }

    public string Rank { get; set; } = string.Empty;
}