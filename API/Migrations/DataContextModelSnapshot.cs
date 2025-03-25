﻿// <auto-generated />
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "9.0.0");

            modelBuilder.Entity("API.Entity.Product", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsActive")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<decimal?>("Price")
                        .HasColumnType("TEXT");

                    b.Property<int?>("Stock")
                        .HasColumnType("INTEGER");

                    b.HasKey("ProductId");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            ProductId = 1,
                            Description = "telephone",
                            ImageUrl = "1.jpg",
                            IsActive = true,
                            Name = "Apple Watch Series 1",
                            Price = 7000m,
                            Stock = 4
                        },
                        new
                        {
                            ProductId = 2,
                            Description = "telephone",
                            ImageUrl = "2.jpg",
                            IsActive = true,
                            Name = "Apple Watch Series 2",
                            Price = 5000m,
                            Stock = 9
                        },
                        new
                        {
                            ProductId = 3,
                            Description = "telephone",
                            ImageUrl = "3.jpg",
                            IsActive = true,
                            Name = "Apple Watch Series 3",
                            Price = 2000m,
                            Stock = 2
                        },
                        new
                        {
                            ProductId = 4,
                            Description = "telephone",
                            ImageUrl = "4.jpg",
                            IsActive = true,
                            Name = "Xiaomi Redmi Watch 1",
                            Price = 8000m,
                            Stock = 2
                        },
                        new
                        {
                            ProductId = 5,
                            Description = "telephone",
                            ImageUrl = "5.jpg",
                            IsActive = true,
                            Name = "Xiaomi Redmi Watch 2",
                            Price = 19000m,
                            Stock = 2
                        },
                        new
                        {
                            ProductId = 6,
                            Description = "telephone",
                            ImageUrl = "6.jpg",
                            IsActive = true,
                            Name = "Xiaomi Redmi Watch 3",
                            Price = 14000m,
                            Stock = 2
                        },
                        new
                        {
                            ProductId = 7,
                            Description = "telephone",
                            ImageUrl = "7.jpg",
                            IsActive = true,
                            Name = "Xiaomi Redmi Watch 4",
                            Price = 12000m,
                            Stock = 2
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
