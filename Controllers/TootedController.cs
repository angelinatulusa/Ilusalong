using Ilusalong.Data;
using Ilusalong.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

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

        [HttpGet]
        public List<Tooted> GetToode()
        {
            var toode = _context.Toode.ToList();
            return toode;
        }

        [HttpPost("add")]
        public ActionResult<Tooted> PostProduct([FromBody] Tooted tooted)
        {
            try
            {
                _context.Toode.Add(tooted);
                _context.SaveChanges();
                return Ok(tooted);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Произошла ошибка при добавлении товара: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<List<Tooted>> DeleteToode(int id)
        {
            var cat = _context.Toode.Find(id);

            if (cat == null)
            {
                return NotFound("Määratud ID-ga toodet pole olemas.");
            }

            _context.Toode.Remove(cat);
            _context.SaveChanges();
            return Ok(_context.Toode.ToList());
        }

        [HttpGet("{id}")]
        public ActionResult<Tooted> GetToode(int id)
        {
            var cat = _context.Toode.FirstOrDefault(t => t.ToodeID == id);

            if (cat == null)
            {
                return NotFound("Määratud ID-ga toodet pole olemas.");
            }

            return cat;
        }

        [HttpPut("{id}")]
        public ActionResult<Tooted> PutToode(int id, [FromBody] Tooted updatedToode)
        {
            var cat = _context.Toode.Find(id);

            if (cat == null)
            {
                return NotFound();
            }

            cat.Nimetus = updatedToode.Nimetus;

            _context.Toode.Update(cat);
            _context.SaveChanges();

            return Ok(cat);
        }
    }
}
