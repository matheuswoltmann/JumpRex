using Microsoft.AspNetCore.Mvc;
using Models;
using Rex.Database;
using Rex.Models;
namespace Rex.Controllers;

[ApiController]
[Route("[controller]")]
public class UsuarioController : ControllerBase
{
    private MyContext db = new MyContext();

    [HttpGet]
    public IActionResult Get()
    {
        var listapontuação = db.Usuarios.ToList();
        return Ok(listapontuação);
    }
    
    [HttpPost]
    public IActionResult Post([FromBody] Usuario usuario)
    {
        db.Usuarios.Add(usuario);
        db.SaveChanges();
        return Ok(new { result = true, codigo_usuario = usuario.codigo_usuario });
    }

    [HttpPatch]
    public IActionResult Patch([FromBody] Usuario usuario)
    {
        Usuario UsuarioQual = db.Usuarios.Find(usuario.nome_usuario);
        if (UsuarioQual == null) return NotFound();
        UsuarioQual.nome_usuario = usuario.nome_usuario;
        db.SaveChanges();
        return Ok(new { result = true, id = usuario.codigo_usuario });
    }

    [HttpDelete]
    public IActionResult Delete([FromBody] Usuario jogador)
    {
        Usuario UsuarioExcluir = db.Usuarios.Find(jogador.nome_usuario);
        if (UsuarioExcluir == null) return NotFound();
        db.Usuarios.Remove(UsuarioExcluir);
        db.SaveChanges();
        return Ok(new { result = true, id = jogador.codigo_usuario });
    }
}