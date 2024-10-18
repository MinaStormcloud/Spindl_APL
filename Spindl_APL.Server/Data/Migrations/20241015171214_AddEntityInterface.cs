using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Spindl_APL.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddEntityInterface : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_AspNetUsers_UserId",
                table: "Bookings");

            migrationBuilder.DropForeignKey(
                name: "FK_CategoryCompany_Categories_CategoriesName",
                table: "CategoryCompany");

            migrationBuilder.DropForeignKey(
                name: "FK_CategoryCompany_Companies_CompaniesCompanyId",
                table: "CategoryCompany");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CategoryCompany",
                table: "CategoryCompany");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Categories",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "CategoriesName",
                table: "CategoryCompany");

            migrationBuilder.RenameColumn(
                name: "InternshipId",
                table: "Internships",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "CompanyId",
                table: "Companies",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "CompaniesCompanyId",
                table: "CategoryCompany",
                newName: "CompaniesId");

            migrationBuilder.RenameIndex(
                name: "IX_CategoryCompany_CompaniesCompanyId",
                table: "CategoryCompany",
                newName: "IX_CategoryCompany_CompaniesId");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Bookings",
                newName: "AccountId");

            migrationBuilder.RenameColumn(
                name: "BookingId",
                table: "Bookings",
                newName: "Id");

            migrationBuilder.RenameIndex(
                name: "IX_Bookings_UserId",
                table: "Bookings",
                newName: "IX_Bookings_AccountId");

            migrationBuilder.AddColumn<int>(
                name: "CategoriesId",
                table: "CategoryCompany",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Categories",
                type: "nvarchar(50)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Categories",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CategoryCompany",
                table: "CategoryCompany",
                columns: new[] { "CategoriesId", "CompaniesId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_Categories",
                table: "Categories",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_AspNetUsers_AccountId",
                table: "Bookings",
                column: "AccountId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CategoryCompany_Categories_CategoriesId",
                table: "CategoryCompany",
                column: "CategoriesId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CategoryCompany_Companies_CompaniesId",
                table: "CategoryCompany",
                column: "CompaniesId",
                principalTable: "Companies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_AspNetUsers_AccountId",
                table: "Bookings");

            migrationBuilder.DropForeignKey(
                name: "FK_CategoryCompany_Categories_CategoriesId",
                table: "CategoryCompany");

            migrationBuilder.DropForeignKey(
                name: "FK_CategoryCompany_Companies_CompaniesId",
                table: "CategoryCompany");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CategoryCompany",
                table: "CategoryCompany");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Categories",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "CategoriesId",
                table: "CategoryCompany");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Categories");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Internships",
                newName: "InternshipId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Companies",
                newName: "CompanyId");

            migrationBuilder.RenameColumn(
                name: "CompaniesId",
                table: "CategoryCompany",
                newName: "CompaniesCompanyId");

            migrationBuilder.RenameIndex(
                name: "IX_CategoryCompany_CompaniesId",
                table: "CategoryCompany",
                newName: "IX_CategoryCompany_CompaniesCompanyId");

            migrationBuilder.RenameColumn(
                name: "AccountId",
                table: "Bookings",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Bookings",
                newName: "BookingId");

            migrationBuilder.RenameIndex(
                name: "IX_Bookings_AccountId",
                table: "Bookings",
                newName: "IX_Bookings_UserId");

            migrationBuilder.AddColumn<string>(
                name: "CategoriesName",
                table: "CategoryCompany",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Categories",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CategoryCompany",
                table: "CategoryCompany",
                columns: new[] { "CategoriesName", "CompaniesCompanyId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_Categories",
                table: "Categories",
                column: "Name");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_AspNetUsers_UserId",
                table: "Bookings",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CategoryCompany_Categories_CategoriesName",
                table: "CategoryCompany",
                column: "CategoriesName",
                principalTable: "Categories",
                principalColumn: "Name",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CategoryCompany_Companies_CompaniesCompanyId",
                table: "CategoryCompany",
                column: "CompaniesCompanyId",
                principalTable: "Companies",
                principalColumn: "CompanyId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
