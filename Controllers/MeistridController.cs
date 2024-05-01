using Ilusalong.Data;
using Ilusalong.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Ilusalong.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeistridController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MeistridController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet] // Получение списка мастеров
        public ActionResult<IEnumerable<Meistrid>> GetMeistrid()
        {
            return _context.Meistrid.ToList();
        }

        [HttpGet("{id}")] // Получение мастера по ID
        public ActionResult<Meistrid> GetMeistrid(int id)
        {
            var meister = _context.Meistrid.Find(id);

            if (meister == null)
            {
                return NotFound();
            }

            return meister;
        }

        [HttpPost] // Добавление нового мастера
        public ActionResult<Meistrid> PostMeistrid(Meistrid meister)
        {
            _context.Meistrid.Add(meister);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetMeistrid), new { id = meister.MeistridID }, meister);
        }

        [HttpPut("{id}")] // Обновление данных мастера по ID
        public IActionResult PutMeistrid(int id, Meistrid meister)
        {
            if (id != meister.MeistridID)
            {
                return BadRequest();
            }

            _context.Entry(meister).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")] // Удаление мастера по ID
        public ActionResult<Meistrid> DeleteMeistrid(int id)
        {
            var meister = _context.Meistrid.Find(id);
            if (meister == null)
            {
                return NotFound();
            }

            _context.Meistrid.Remove(meister);
            _context.SaveChanges();

            return meister;
        }
    }

}
