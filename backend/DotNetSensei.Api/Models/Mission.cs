namespace DotNetSensei.Api.Models;

public class Mission
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public int Reward { get; set; }

    public string Status { get; set; } = string.Empty;
}