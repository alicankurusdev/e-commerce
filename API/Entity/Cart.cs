namespace API.Entity;

public class Cart
{
    public int CartId { get; set; }

    public string CustomerId {get; set;}= null!;

    public List<CartItem> CartItems {get; set;}= new List<CartItem> ();

    public void AddItem(Product product, int quantity){
        var item = CartItems.Where(c=>c.ProductId == product.ProductId).FirstOrDefault();
        
        if (item == null){
            CartItems.Add(new CartItem { Product = product, Quantity=quantity});
        }
        else{
            item.Quantity += quantity;
        }
    }
    public void DeleteItem(int ProductId, int quantity ){
        var item = CartItems.Where(c=>c.ProductId == ProductId).FirstOrDefault();

        if (item == null)return;
        item.Quantity -= quantity;
        if (item.Quantity == 0 )
        {
            CartItems.Remove(item);
        }
    }

}

public class CartItem
{
    public int CartItemId { get; set; }
    public int ProductId { get; set; }
    public  Product Product { get; set; } = null!;
    public  int Quantity { get; set; }
    public   int CartId { get; set; } 




}