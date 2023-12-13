using System;
using System.ComponentModel.DataAnnotations.Schema;
using Models;

namespace Rex.Models;

public class Pontuacao
{
    public int pontuacao_usuario { get; set; }

    [ForeignKey("Usuario")]

    public int? codigo_usuario { get; set; }

    public virtual Usuario Usuario { get; set; }

    public string? data_pontuacao { get; set; }

    public int pontos { get; set; }
}
