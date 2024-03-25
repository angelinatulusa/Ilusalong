using Ilusalong.Data;
using Ilusalong.Models;
using Microsoft.AspNetCore.Mvc;

namespace Ilusalong.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class KategooriadController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public KategooriadController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet] //вывод на экран
        public List<Kategooriad> GetKategooria()
        {
            var cats = _context.Kategooria.ToList();
            return cats;
        }
        [HttpPost] //добавление
        public List<Kategooriad> PostKategooria([FromBody] Kategooriad cat)
        {
            _context.Kategooria.Add(cat);
            _context.SaveChanges();
            return _context.Kategooria.ToList();
        }
        [HttpDelete("{id}")] //удаление
        public List<Kategooriad> DeleteKategooria(int id)
        {
            var cat = _context.Kategooria.Find(id);

            if (cat == null)
            {
                return _context.Kategooria.ToList();
            }

            _context.Kategooria.Remove(cat);
            _context.SaveChanges();
            return _context.Kategooria.ToList();
        }
        [HttpGet("{id}")] //вывод на экран через Ид
        public ActionResult<Kategooriad> getKategooria(int id)
        {
            var cat = _context.Kategooria.Find(id);

            if (cat == null)
            {
                return NotFound("Määratud ID-ga kategooriat pole olemas.");
            }

            return cat;
        }
        [HttpPut("{id}")]//изменение
        public ActionResult<List<Kategooriad>> PutKategooria(int id, [FromBody] Kategooriad updatedKategooria)
        {
            var cat = _context.Kategooria.Find(id);

            if (cat == null)
            {
                return NotFound();
            }

            cat.kat_nimetus = updatedKategooria.kat_nimetus;

            _context.Kategooria.Update(cat);
            _context.SaveChanges();

            return Ok(_context.Kategooria);
        }
    }
}
