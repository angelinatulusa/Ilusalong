using Ilusalong.Data;
using Ilusalong.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Ilusalong.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TootedController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TootedController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Tooted>> GetTooted()
        {
            var tooted = _context.Toode.ToList();
            return Ok(tooted);
        }

        [HttpGet("categories")]
        public ActionResult<IEnumerable<Kategooriad>> GetCategories()
        {
            var categories = _context.Kategooria.ToList();
            return Ok(categories);
        }

        [HttpPost("add")]
        public ActionResult<IEnumerable<Tooted>> PostToode([FromBody] Tooted toode)
        {
            _context.Toode.Add(toode);
            _context.SaveChanges();
            return Ok(_context.Toode.ToList());
        }

        [HttpDelete("delete/{id}")]
        public ActionResult<IEnumerable<Tooted>> DeleteToode(int id)
        {
            var toode = _context.Toode.Find(id);

            if (toode == null)
            {
                return NotFound();
            }

            _context.Toode.Remove(toode);
            _context.SaveChanges();
            return Ok(_context.Toode.ToList());
        }

        [HttpGet("select/{id}")]
        public ActionResult<Tooted> GetToode(int id)
        {
            var toode = _context.Toode.Find(id);

            if (toode == null)
            {
                return NotFound();
            }

            return Ok(toode);
        }

        [HttpPut("update/{id}")]
        public ActionResult<IEnumerable<Tooted>> PutToode(int id, [FromBody] Tooted updatedToode)
        {
            var toode = _context.Toode.Find(id);

            if (toode == null)
            {
                return NotFound();
            }

            toode.Nimetus = updatedToode.Nimetus;
            toode.Hind = updatedToode.Hind;
            toode.Kirjeldus = updatedToode.Kirjeldus;

            _context.Toode.Update(toode);
            _context.SaveChanges();

            return Ok(_context.Toode.ToList());
        }

    }
}
