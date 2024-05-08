using Ilusalong.Data;
using Ilusalong.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Ilusalong.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public LoginController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Login(LoginModel model)
        {
            var user = _context.Kasutajad.FirstOrDefault(k => k.kas_nimi == model.Username && 
            k.kas_pernimi == model.LastName && k.kas_parool == model.Password);

            if (user == null)
            {
                return NotFound(); 
            }

            return Ok(user);
        }
    }
}
