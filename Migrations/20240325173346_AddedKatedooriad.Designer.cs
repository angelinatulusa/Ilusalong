﻿// <auto-generated />
using Ilusalong.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Ilusalong.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20240325173346_AddedKatedooriad")]
    partial class AddedKatedooriad
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Ilusalong.Models.Kategooriad", b =>
                {
                    b.Property<int>("KategooriaID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("KategooriaID"));

                    b.Property<string>("kat_nimetus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("KategooriaID");

                    b.ToTable("Kategooria");
                });
#pragma warning restore 612, 618
        }
    }
}
