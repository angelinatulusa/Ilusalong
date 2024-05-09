using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Ilusalong.Models
{
    public class Tooted
    {
        [Key]
        public int ToodeID { get; set; }
        public string Nimetus { get; set; }
        public float Hind { get; set; }
        public string Kirjeldus { get; set; }
        public int KategooriaId { get; set; } // изменяем тип данных на int
    }
}
