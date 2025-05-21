using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ProjectFrontend.Models;

namespace ProjectFrontend.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }
    public IActionResult About()
    {
        return View();
    }
    public IActionResult ContactUs()
    {
        return View();
    }
    public IActionResult Privacy()
    {
        return View();
    }
    public IActionResult Faq(){
        return View();
    }
    public IActionResult ForgotPassword()
    {
        return View();
    }
    public IActionResult Login()
    {
        return View();
    }
    public IActionResult Register()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
    public IActionResult ResultPayment()
    {
        return View("Result");
    }
}
