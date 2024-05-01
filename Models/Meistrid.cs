using System.ComponentModel.DataAnnotations;

namespace Ilusalong.Models
{
    public class Meistrid
    {
        [Key] public int MeistridID { get; set; }
        public string master_nimi { get; set; }
        public string master_pernimi { get; set; }
        public string master_email { get; set; }
        public string master_telefon { get; set; }
        public string master_eriala { get; set; }
    }
}
