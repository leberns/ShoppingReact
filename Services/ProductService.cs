using ShoppingReact.Entities;

namespace ShoppingReact.Services;

public interface IProductService
{
  IList<Product> GetProducts();
  IList<Product> Search(string term);
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

    products.Add(new Product
    {
      Id = 3,
      Name = "Broom",
      Category = "Cleaning",
      Currency = "CHF",
      Price = 7.9m
    });

    products.Add(new Product
    {
      Id = 4,
      Name = "Glass cleaner",
      Category = "Cleaning",
      Currency = "CHF",
      Price = 6
    });

    products.Add(new Product
    {
      Id = 5,
      Name = "Wood cleaner",
      Category = "Cleaning",
      Currency = "CHF",
      Price = 9
    });

    products.Add(new Product
    {
      Id = 6,
      Name = "Dish soap",
      Category = "Cleaning",
      Currency = "CHF",
      Price = 2.95m
    });

    return products;
  }

  public IList<Product> Search(string term)
  {
    var products = GetProducts();
    var matches = products.Where(p => p.Name.Contains(term, StringComparison.InvariantCultureIgnoreCase)).ToList();
    return matches;
  }
}
