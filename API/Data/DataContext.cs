using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;


public class DataContext:DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {
        
    } 
public DbSet<Product>  Products =>Set<Product>();


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Product>().HasData(
            new List<Product>{
                new Product{ ProductId=1 , Name="Apple Watch Series 1", Description ="telephone",Price =7000,
                IsActive=true, ImageUrl="1.jpg",Stock=4},
                 new Product{ ProductId=2 , Name="Apple Watch Series 2", Description ="telephone",Price =5000,
                IsActive=true, ImageUrl="2.jpg",Stock=9},
                 new Product{ ProductId=3 , Name="Apple Watch Series 3", Description ="telephone",Price =2000,
                IsActive=true, ImageUrl="3.jpg",Stock=2},
                new Product{ ProductId=4 , Name="Xiaomi Redmi Watch 1", Description ="telephone",Price =8000,
                IsActive=true, ImageUrl="4.jpg",Stock=2},
                 new Product{ ProductId=5 , Name="Xiaomi Redmi Watch 2", Description ="telephone",Price =19000,
                IsActive=true, ImageUrl="5.jpg",Stock=2},
                new Product{ ProductId=6 , Name="Xiaomi Redmi Watch 3", Description ="telephone",Price =14000,
                IsActive=true, ImageUrl="6.jpg",Stock=2},
                new Product{ ProductId=7 , Name="Xiaomi Redmi Watch 4", Description ="telephone",Price =12000,
                IsActive=true, ImageUrl="7.jpg",Stock=2}
            }
        );
    }

} 