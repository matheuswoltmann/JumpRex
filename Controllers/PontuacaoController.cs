using Microsoft.AspNetCore.Mvc;
using Rex.Database;
using Rex.Models;
using Microsoft.EntityFrameworkCore;
namespace Rex.Controllers;

[ApiController]
[Route("[controller]")]
public class PontuacaoController : Controller
{
    private MyContext db = new MyContext();

    [HttpGet]
    public IActionResult Get()
    {
        var listapontuação = db.Pontuacoes.ToList();
        return Ok(listapontuação);
    }

    [HttpGet]
    [Route("ranking")]
    public IActionResult GetRanking()
    {
        var listapontuação = db.Pontuacoes.OrderByDescending(x => x.pontos).Take(5).Skip(0).Select(x => new
        {
            Data = x.data_pontuacao,
            Pontuacao = x.pontos,
            Jogador = x.codigo_usuario,
            NomeJogador = x.Usuario.nome_usuario
        });
        return Ok(listapontuação);
    }
}