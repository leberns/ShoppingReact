using ShoppingReact.Entities;

namespace ShoppingReact.Services;

public interface IProductService
{
  IList<Product> GetProducts();
}

public class ProductService : IProductService
{
  public IList<Product> GetProducts()
  {
    IList<Product> products = new List<Product>();

    products.Add(new Product
    {
      Id = 1,
      Name = "Soap",
      Category = "Cleaning",
      Currency = "CHF",
      Price = 3.5m
    });

    products.Add(new Product
    {
      Id = 2,
      Name = "Lamp",
      Category = "Light",
      Currency = "CHF",
      Price = 5m
    });

    return products;
  }
}
