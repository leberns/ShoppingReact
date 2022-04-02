using Microsoft.AspNetCore.Mvc;
using ShoppingReact.Entities;
using ShoppingReact.Services;

namespace ShoppingReact.Controllers;

[ApiController]
[Route("[controller]")]
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

  [HttpGet]
  public IList<Product> Get()
  {
    var products = _productService.GetProducts();
    return products;
  }
}
