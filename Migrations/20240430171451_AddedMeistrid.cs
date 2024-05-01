using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ilusalong.Migrations
{
    /// <inheritdoc />
    public partial class AddedMeistrid : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Meistrid",
                columns: table => new
                {
                    MeistridID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    master_nimi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    master_pernimi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    master_email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    master_telefon = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    master_eriala = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Meistrid", x => x.MeistridID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Meistrid");
        }
    }
}
