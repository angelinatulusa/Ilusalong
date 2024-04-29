using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Ilusalong.Models
{
    public class Kasutajad
    {
        [Key] public int KasutajadID { get; set; }
        public string kas_nimi { get; set; }
        public string kas_pernimi { get; set; }
        public string kas_parool { get; set; }
        public string kas_email { get; set; }
        public string kas_telefon { get; set; }
        public string roll { get; set; }
    }
}
