using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ilusalong.Migrations
{
    /// <inheritdoc />
    public partial class AddedKasutajad : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Kasutajad",
                columns: table => new
                {
                    KasutajadID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    kas_nimi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    kas_pernimi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    kas_parool = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    kas_email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    kas_telefon = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    roll = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kasutajad", x => x.KasutajadID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Kasutajad");
        }
    }
}
