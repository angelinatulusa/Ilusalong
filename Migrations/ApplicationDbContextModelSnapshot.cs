﻿// <auto-generated />
using Ilusalong.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Ilusalong.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
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

            modelBuilder.Entity("Ilusalong.Models.Tooted", b =>
                {
                    b.Property<int>("ToodeID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ToodeID"));

                    b.Property<float>("Hind")
                        .HasColumnType("real");

                    b.Property<int>("KategooriaID")
                        .HasColumnType("int");

                    b.Property<string>("Kirjeldus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nimetus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ToodeID");

                    b.HasIndex("KategooriaID");

                    b.ToTable("Toode");
                });

            modelBuilder.Entity("Ilusalong.Models.Tooted", b =>
                {
                    b.HasOne("Ilusalong.Models.Kategooriad", "Kategooria")
                        .WithMany()
                        .HasForeignKey("KategooriaID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Kategooria");
                });
#pragma warning restore 612, 618
        }
    }
}
