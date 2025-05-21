using Microsoft.AspNetCore.Mvc;

namespace NongSan.Controllers
{
    public class SellerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Products()
        {
            return View();
        }

        public IActionResult ProductEdit()
        {
            return View();
        }

        public IActionResult ProductCreate()
        {
            return View();
        }
        public IActionResult Orders(){
            return View();
        }

        public IActionResult OrderDetail(int? id){
            if(id == null){
                return NotFound();
            }
            return View("OrderDetailSeller");
        }
        public IActionResult Accountant(){
            return View();
        }

        public IActionResult Settings(){
            return View();
        }
        
        public IActionResult Chat(){
            return View();
        }
    }
}
