using Microsoft.EntityFrameworkCore;
using Models;
using Rex.Models;

namespace Rex.Database;

public class MyContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder builer)
    {
    builer.UseMySQL("Server=localhost;User=root;Port=3306;Password=;Database=jump_rex;");
    }
    
    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<Pontuacao> Pontuacoes { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<Usuario>().ToTable("usuarios");
        builder.Entity<Usuario>().HasKey(u => u.codigo_usuario);
        builder.Entity<Usuario>().Property(x => x.codigo_usuario).ValueGeneratedOnAdd();

        builder.Entity<Pontuacao>().ToTable("pontuacao");
        builder.Entity<Pontuacao>().HasKey(u => u.pontuacao_usuario);
        builder.Entity<Pontuacao>().Property(x => x.pontuacao_usuario).ValueGeneratedOnAdd();

        builder.Entity<Pontuacao>().HasOne(x => x.Usuario).WithMany(x => x.Pontuacao);
    }
}

