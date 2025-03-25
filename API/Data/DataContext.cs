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
                new Product{ ProductId=1 , Name="Iphone14", Description ="telephone",Price =7000,
                IsActive=true, ImageUrl="1.jpg",Stock=4},
                 new Product{ ProductId=2 , Name="Iphone15", Description ="telephone",Price =5000,
                IsActive=true, ImageUrl="2.jpg",Stock=9},
                 new Product{ ProductId=3 , Name="Iphone16", Description ="telephone",Price =2000,
                IsActive=true, ImageUrl="3.jpg",Stock=2},
                new Product{ ProductId=4 , Name="Iphone17", Description ="telephone",Price =12000,
                IsActive=true, ImageUrl="4.jpg",Stock=2},
                 new Product{ ProductId=5 , Name="Iphone18", Description ="telephone",Price =12000,
                IsActive=true, ImageUrl="5.jpg",Stock=2}
            }
        );
    }

} 