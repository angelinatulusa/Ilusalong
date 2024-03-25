using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ilusalong.Migrations
{
    /// <inheritdoc />
    public partial class AddedTooted : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Toode",
                columns: table => new
                {
                    ToodeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nimetus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Hind = table.Column<float>(type: "real", nullable: false),
                    Kirjeldus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    KategooriaID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Toode", x => x.ToodeID);
                    table.ForeignKey(
                        name: "FK_Toode_Kategooria_KategooriaID",
                        column: x => x.KategooriaID,
                        principalTable: "Kategooria",
                        principalColumn: "KategooriaID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Toode_KategooriaID",
                table: "Toode",
                column: "KategooriaID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Toode");
        }
    }
}
