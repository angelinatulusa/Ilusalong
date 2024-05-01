using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Ilusalong.Models
{
    public class Protseduurid
    {
        [Key] public int ProtseduurID { get; set; }
        public string nimetus { get; set; }
        public DateTime Aeg { get; set; }
        public string kas_nimi { get; set; }
        public string kas_email { get; set; }
        public string kas_telefon { get; set; }
        public string master_nimi { get; set; }
        public string master_pernimi { get; set; }
    }
}
