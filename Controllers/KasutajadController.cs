using Ilusalong.Data;
using Ilusalong.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Ilusalong.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KasutajadController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public KasutajadController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet] // Получение списка пользователей
        public ActionResult<IEnumerable<Kasutajad>> GetKasutajad()
        {
            return _context.Kasutajad.ToList();
        }

        [HttpGet("{id}")] // Получение пользователя по ID
        public ActionResult<Kasutajad> GetKasutajad(int id)
        {
            var kasutaja = _context.Kasutajad.Find(id);

            if (kasutaja == null)
            {
                return NotFound();
            }

            return kasutaja;
        }

        [HttpPost] // Добавление нового пользователя
        public ActionResult<Kasutajad> PostKasutajad(Kasutajad kasutaja)
        {
            _context.Kasutajad.Add(kasutaja);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetKasutajad), new { id = kasutaja.KasutajadID }, kasutaja);
        }

        [HttpPut("{id}")] // Обновление данных пользователя по ID
        public IActionResult PutKasutajad(int id, Kasutajad kasutaja)
        {
            if (id != kasutaja.KasutajadID)
            {
                return BadRequest();
            }

            _context.Entry(kasutaja).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")] // Удаление пользователя по ID
        public ActionResult<Kasutajad> DeleteKasutajad(int id)
        {
            var kasutaja = _context.Kasutajad.Find(id);
            if (kasutaja == null)
            {
                return NotFound();
            }

            _context.Kasutajad.Remove(kasutaja);
            _context.SaveChanges();

            return kasutaja;
        }
        [HttpGet("masters")] // Получение списка пользователей с ролью "master"
        public ActionResult<IEnumerable<Kasutajad>> GetMasterUsers()
        {
            var masters = _context.Kasutajad.Where(k => k.roll == "master").ToList();
            return masters;
        }
    }
}
