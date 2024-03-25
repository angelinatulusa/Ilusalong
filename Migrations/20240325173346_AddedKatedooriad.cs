using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ilusalong.Migrations
{
    /// <inheritdoc />
    public partial class AddedKatedooriad : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Kategooria",
                columns: table => new
                {
                    KategooriaID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    kat_nimetus = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kategooria", x => x.KategooriaID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Kategooria");
        }
    }
}
