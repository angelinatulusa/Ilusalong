using System.ComponentModel.DataAnnotations;

namespace Ilusalong.Models
{
    public class Kategooriad
    {
        [Key] public int KategooriaID { get; set; }
        public string kat_nimetus { get; set; }
    }
}
