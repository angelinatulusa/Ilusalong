using Ilusalong.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Ilusalong.Models
{
    public class Tooted
    {
        [Key] public int ToodeID { get; set; }
        public string Nimetus { get; set; }
        public float Hind { get; set; }
        public string Kirjeldus { get; set; }
        [ForeignKey("KategooriaID")] public int KategooriaID { get; set; } // Указываем тип данных int, соответствующий типу первичного ключа в сущности Kategooriad
        public Kategooriad Kategooria { get; set; } // Здесь мы указываем навигационное свойство, которое представляет собой связь с сущностью Kategooriad

    }
}
