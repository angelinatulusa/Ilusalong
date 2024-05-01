using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ilusalong.Migrations
{
    /// <inheritdoc />
    public partial class AddedProtseduurid : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Protseduurid",
                columns: table => new
                {
                    ProtseduurID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nimetus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Aeg = table.Column<DateTime>(type: "datetime2", nullable: false),
                    kas_nimi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    kas_email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    kas_telefon = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    master_nimi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    master_pernimi = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Protseduurid", x => x.ProtseduurID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Protseduurid");
        }
    }
}
