using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Spindl_APL.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddBookingFunctionality : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_AspNetUsers_AccountId",
                table: "Bookings");

            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_Companies_CompanyId",
                table: "Bookings");

            migrationBuilder.DropForeignKey(
                name: "FK_CategoryCompany_Categories_CategoriesId",
                table: "CategoryCompany");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CategoryCompany",
                table: "CategoryCompany");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Categories",
                table: "Categories");

            migrationBuilder.DropIndex(
                name: "IX_Bookings_CompanyId",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "CategoriesId",
                table: "CategoryCompany");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "CompanyId",
                table: "Bookings");

            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Bookings",
                newName: "BookingDate");

            migrationBuilder.RenameColumn(
                name: "AccountId",
                table: "Bookings",
                newName: "ReceiverId");

            migrationBuilder.RenameIndex(
                name: "IX_Bookings_AccountId",
                table: "Bookings",
                newName: "IX_Bookings_ReceiverId");

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

            migrationBuilder.AddColumn<string>(
                name: "InitiatorId",
                table: "Bookings",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "IsConfirmed",
                table: "Bookings",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "CompanyId",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_CategoryCompany",
                table: "CategoryCompany",
                columns: new[] { "CategoriesName", "CompaniesId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_Categories",
                table: "Categories",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_InitiatorId",
                table: "Bookings",
                column: "InitiatorId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_CompanyId",
                table: "AspNetUsers",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_UserName",
                table: "AspNetUsers",
                column: "UserName",
                unique: true,
                filter: "[UserName] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Companies_CompanyId",
                table: "AspNetUsers",
                column: "CompanyId",
                principalTable: "Companies",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_AspNetUsers_InitiatorId",
                table: "Bookings",
                column: "InitiatorId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_AspNetUsers_ReceiverId",
                table: "Bookings",
                column: "ReceiverId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_CategoryCompany_Categories_CategoriesName",
                table: "CategoryCompany",
                column: "CategoriesName",
                principalTable: "Categories",
                principalColumn: "Name",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Companies_CompanyId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_AspNetUsers_InitiatorId",
                table: "Bookings");

            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_AspNetUsers_ReceiverId",
                table: "Bookings");

            migrationBuilder.DropForeignKey(
                name: "FK_CategoryCompany_Categories_CategoriesName",
                table: "CategoryCompany");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CategoryCompany",
                table: "CategoryCompany");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Categories",
                table: "Categories");

            migrationBuilder.DropIndex(
                name: "IX_Bookings_InitiatorId",
                table: "Bookings");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_CompanyId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_UserName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "CategoriesName",
                table: "CategoryCompany");

            migrationBuilder.DropColumn(
                name: "InitiatorId",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "IsConfirmed",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "CompanyId",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "ReceiverId",
                table: "Bookings",
                newName: "AccountId");

            migrationBuilder.RenameColumn(
                name: "BookingDate",
                table: "Bookings",
                newName: "Date");

            migrationBuilder.RenameIndex(
                name: "IX_Bookings_ReceiverId",
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
                type: "nvarchar(max)",
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

            migrationBuilder.AddColumn<int>(
                name: "CompanyId",
                table: "Bookings",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_CategoryCompany",
                table: "CategoryCompany",
                columns: new[] { "CategoriesId", "CompaniesId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_Categories",
                table: "Categories",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_CompanyId",
                table: "Bookings",
                column: "CompanyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_AspNetUsers_AccountId",
                table: "Bookings",
                column: "AccountId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_Companies_CompanyId",
                table: "Bookings",
                column: "CompanyId",
                principalTable: "Companies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CategoryCompany_Categories_CategoriesId",
                table: "CategoryCompany",
                column: "CategoriesId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
