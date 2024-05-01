using Ilusalong.Data;
using Ilusalong.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Ilusalong.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProtseduuridController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProtseduuridController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet] // Получение всех процедур
        public ActionResult<IEnumerable<Protseduurid>> GetProtseduurid()
        {
            var procedures = _context.Protseduurid.ToList();
            return procedures;
        }

        [HttpPost] // Добавление новой процедуры
        public ActionResult<Protseduurid> PostProtseduurid(Protseduurid procedure)
        {
            _context.Protseduurid.Add(procedure);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetProtseduurid), new { id = procedure.ProtseduurID }, procedure);
        }

        [HttpDelete("{id}")] // Удаление процедуры по ID
        public ActionResult<IEnumerable<Protseduurid>> DeleteProtseduurid(int id)
        {
            var procedure = _context.Protseduurid.Find(id);

            if (procedure == null)
            {
                return NotFound();
            }

            _context.Protseduurid.Remove(procedure);
            _context.SaveChanges();
            var procedures = _context.Protseduurid.ToList();
            return procedures;
        }

        [HttpGet("{id}")] // Получение процедуры по ID
        public ActionResult<Protseduurid> GetProtseduurid(int id)
        {
            var procedure = _context.Protseduurid.Find(id);

            if (procedure == null)
            {
                return NotFound();
            }

            return procedure;
        }

        [HttpPut("{id}")] // Обновление процедуры по ID
        public ActionResult<IEnumerable<Protseduurid>> PutProtseduurid(int id, Protseduurid updatedProcedure)
        {
            var procedure = _context.Protseduurid.Find(id);

            if (procedure == null)
            {
                return NotFound();
            }

            procedure.nimetus = updatedProcedure.nimetus;
            procedure.Aeg = updatedProcedure.Aeg;
            procedure.kas_nimi = updatedProcedure.kas_nimi;
            procedure.kas_email = updatedProcedure.kas_email;
            procedure.kas_telefon = updatedProcedure.kas_telefon;
            procedure.master_nimi = updatedProcedure.master_nimi;
            procedure.master_pernimi = updatedProcedure.master_pernimi;

            _context.Protseduurid.Update(procedure);
            _context.SaveChanges();

            var procedures = _context.Protseduurid.ToList();
            return procedures;
        }
    }
}
