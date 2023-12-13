using Rex.Models;

namespace Models;

public class Usuario
{
    public int codigo_usuario { get; set; }

    public string? nome_usuario { get; set; }

    public string? senha_usuario { get; set; }

    public virtual List<Pontuacao> Pontuacao { get; set; }
}