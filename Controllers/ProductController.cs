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
}
