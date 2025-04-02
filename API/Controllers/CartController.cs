using API.Data;
using API.DTO;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;


[ApiController]
[Route("/api/[controller]")]
public class CartController : ControllerBase
{
    private readonly DataContext _context;
    public CartController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<CartDTO>> GetCart()
    {


        return CartToDTO (await GetOrCreate());

        
    }

    private ActionResult<CartDTO> CartToDTO(Cart cart)
    {
        throw new NotImplementedException();
    }

    [HttpPost]
    public async Task<ActionResult> AddItemToCart(int productId, int quantity)
    {
        var cart = await GetOrCreate();

        var product = await _context.Products.FirstOrDefaultAsync(i => i.ProductId == productId);
        if (product == null)
            return NotFound("The prduct is not in Database");
        cart.AddItem(product, quantity);
        var result = await _context.SaveChangesAsync() > 0;
        if (result)
            return CreatedAtAction(nameof(GetCart), CartToDTO(cart));
        return BadRequest(new ProblemDetails { Title = "The product cannot be addded to cart" });

    }
    

    [HttpDelete]
    public async Task<ActionResult> DeleteItemFromCart(int productId, int quantity)
    {

        var cart = await GetOrCreate();

        cart.DeleteItem(productId, quantity);
        var result = await _context.SaveChangesAsync() > 0;

        if (result) return Ok();
        return BadRequest(new ProblemDetails { Title = "Problem removing item from the cart" });



    }
    public async Task<Cart> GetOrCreate()
    {

        var cart = await _context.Carts.Include(i => i.CartItems).ThenInclude(i => i.Product).Where(i => i.CustomerId == Request.Cookies["customerId"]).FirstOrDefaultAsync();

        if (cart == null)
        {

            var customerId = Guid.NewGuid().ToString();
            var cookieOptions = new CookieOptions
            {
                Expires = DateTime.Now.AddMonths(1),
                IsEssential = true

            };
            Response.Cookies.Append("customerId", customerId, cookieOptions);
            cart = new Cart { CustomerId = customerId };
            _context.Carts.Add(cart);
            await _context.SaveChangesAsync();
        }

        return cart;
    }

    private  CartDTO CartToDTo(Cart cart)
    {
        return new CartDTO
        {
            CartId = cart.CartId,
            CustomerId = cart.CustomerId,
            CartItems = cart.CartItems.Select(item => new CartItemDTO
            {
                ProductId = item.ProductId,
                Name = item.Product.Name,
                Price = item.Product.Price,
                Quantity = item.Quantity,
                ImageUrl = item.Product.ImageUrl,
                

            }).ToList()
        };
    }

}