
using Microsoft.AspNetCore.Mvc;

namespace ProjectFrontend.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Create()
        {
            return View();
        }

        public IActionResult Edit(int id)
        {
            return View();
        }

        public IActionResult Delete(int id)
        {
            return View();
        }

        public IActionResult Details(int id)
        {
            return View();
        }
        public IActionResult Store(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            else
            {
                return View();
            }
        }
    }

}