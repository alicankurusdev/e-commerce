using API.Entity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;
[ApiController]
[Route("/api/[controller]")] //api/products
public class ProductsController:ControllerBase
{
    
[HttpGet]
public IActionResult GetProducts(){

return Ok(new List<Product>(){
    new Product{
        ProductId=1,
        Name = "iphone14",
        Description ="telefon",
        ImageUrl = "1.jpg",
        Price= 70000,
        IsActive = true,
        Stock = 100
    },
      new Product{
        ProductId=2,
        Name = "iphone15",
        Description ="telefon",
        ImageUrl = "2.jpg",
        Price= 20000,
        IsActive = true,
        Stock = 300
    }
} );
}


// api/products/1
[HttpGet("{id}")]
public IActionResult GetProduct(int id){
    return Ok(new Product(){
          
        ProductId=2,
        Name = "iphone15",
        Description ="telefon",
        ImageUrl = "2.jpg",
        Price= 20000,
        IsActive = true,
        Stock = 300
    
    });

}





}
