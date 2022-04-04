using Microsoft.AspNetCore.Mvc;
using ShoppingReact.Entities;
using ShoppingReact.Services;

namespace ShoppingReact.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class ProductController : ControllerBase
{
  private readonly ILogger<ProductController> _logger;
  private readonly IProductService _productService;

  public ProductController(ILogger<ProductController> logger,
      IProductService productService)
  {
    _logger = logger;
    _productService = productService;
  }

  // https://localhost:44400/api/product/GetProducts
  [HttpGet, ActionName("GetProducts")]
  public IList<Product> GetProducts()
  {
    var products = _productService.GetProducts();
    return products.ToArray();
  }

  // https://localhost:44400/api/product/GetProduct?id=1
  [HttpGet, ActionName("GetProduct")]
  public Product GetProduct([FromQuery] int id)
  {
    var products = _productService.GetProducts();
    var product = products.First(p => p.Id == id);
    return product;
  }

  // https://localhost:44400/api/product/GetProductSpecific/1/Soap
  [HttpGet("{id}/{name}")]
  public Product GetProductSpecific(int id, string name)
  {
    var products = _productService.GetProducts();
    var product = products.First(p => p.Id == id && p.Name == name);
    return product;
  }

  // https://localhost:44400/api/product/Search/soap
  [HttpGet("{term}")]
  public IList<Product> Search(string term)
  {
    var products = _productService.GetProducts();
    var matches = products.Where(p => p.Name.Contains(term, StringComparison.InvariantCultureIgnoreCase)).ToList();
    return matches;
  }
}
