using Ilusalong.Data;
using Ilusalong.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Ilusalong.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TootedController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public TootedController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet] //вывод на экран
        public List<Tooted> GetToode()
        {
            var toode = _context.Toode.Include(a => a.Kategooria).ToList(); //include чтобы также выводило и название категории
            return toode;
        }
        [HttpPost] //добавление
        public IActionResult PostProduct([FromBody] Tooted tooted)
        {
            // Проверяем, существует ли категория с заданным идентификатором
            var existingKategooria = _context.Kategooria.Find(tooted.KategooriaID);
            if (existingKategooria == null)
            {
                // Если категория не найдена, возвращаем сообщение об ошибке
                return BadRequest("Määratud ID-ga kategooriat pole olemas.");
            }

            // Переопределяем внешний ключ для категории, если она указана
            tooted.Kategooria = existingKategooria;

            //добавление товара
            _context.Toode.Add(tooted);
            _context.SaveChanges();

            //список товаров с их категориями
            return Ok(_context.Toode.Include(a => a.Kategooria).ToList());
        }
        [HttpDelete("{id}")] //удаление
        public List<Tooted> DeleteToode(int id)
        {
            var cat = _context.Toode.Find(id);

            if (cat == null)
            {
                return _context.Toode.ToList();
            }

            _context.Toode.Remove(cat);
            _context.SaveChanges();
            return _context.Toode.Include(a => a.Kategooria).ToList();
        }
        [HttpGet("{id}")] //вывод на экран через Ид
        public ActionResult<Tooted> getToode(int id)
        {
            var cat = _context.Toode.Include(a => a.Kategooria).FirstOrDefault(t => t.ToodeID == id);

            if (cat == null)
            {
                return NotFound("Määratud ID-ga toodet pole olemas.");
            }

            return cat;
        }
        [HttpPut("{id}")]//изменение
        public ActionResult<List<Tooted>> PutToode(int id, [FromBody] Tooted updatedToode)
        {
            var cat = _context.Toode.Find(id);

            if (cat == null)
            {
                return NotFound();
            }

            cat.Nimetus = updatedToode.Nimetus;

            _context.Toode.Update(cat);
            _context.SaveChanges();

            return Ok(_context.Toode.Include(a => a.Kategooria).ToList());
        }
    }
}
