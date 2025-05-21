using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ProjectFrontend.Models;

namespace ProjectFrontend.Controllers;

public class AccountController : Controller
{
    private readonly ILogger<AccountController> _logger;

    public AccountController(ILogger<AccountController> logger)
    {
        _logger = logger;
    }

    public IActionResult Logout()
    {
        return View();
    }
    public IActionResult Profile()
    {
        return View("ProfileUser");
    }
    public IActionResult Cart()
    {
        return View("Cart");
    }
    public IActionResult Checkout()
    {
        return View("Checkout");
    }
    public IActionResult Order(int? id)
    {
        if(id == null){
            return BadRequest();
        }
        return View("Order");
    }
    public IActionResult Orders()
    {
        return View("Orders");
    }
    public IActionResult Chat()
    {
        return View("ChatWithSeller");
    }
}
