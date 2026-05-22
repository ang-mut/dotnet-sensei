using Microsoft.EntityFrameworkCore;

using DotNetSensei.Api.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy
                .AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

// =========================
// SERVICES
// =========================

builder.Services.AddControllers();

builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseNpgsql(
        "Host=aws-0-eu-west-1.pooler.supabase.com;Port=6543;Database=postgres;Username=postgres.cpsmvtqdaocrqnkpvmvq;Password=Postgress123.;SSL Mode=Require;Trust Server Certificate=true;Timeout=300;Command Timeout=300;Pooling=false;Keepalive=30"
    );
});

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

var app = builder.Build();

// =========================
// MIDDLEWARE
// =========================

app.UseSwagger();

app.UseSwaggerUI();

app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

app.Run();