using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace VNFarm.Controllers
{
    public class AdminController : Controller
    {
        public AdminController(){
            
        }

        public IActionResult Index()
        {
            return RedirectToAction("Dashboard", "Admin");
        }

        public IActionResult Dashboard()
        {
            return View();
        }
        public IActionResult Shop()
        {
            return View();
        }
        public IActionResult ShopDetail(int id)
        {
            return View();
        }
        public IActionResult ShopRequest()
        {
            return View("RegisterShopList");
        }
        public IActionResult ShopRequestDetail(int id)
        {
            return View("RegisterShopDetail");
        }
        public IActionResult Product()
        {
            return View("ProductList");
        }
        
        public IActionResult ProductDetail(int id)
        {
            return View("ProductDetail");
        }
        public IActionResult ProductAdd()
        {
            return View("ProductAdd");
        }
        public IActionResult ProductEdit(int id)
        {
            return View("ProductEdit");
        }
        public IActionResult Order()
        {
            return View("OrderList");
        }
        public IActionResult OrderDetail(string orderCode)
        {
            return View("OrderDetail");
        }
        public IActionResult Users()
        {
            return View("UserList");
        }
        public IActionResult UserDetail(int id)
        {
            return View("UserDetail");
        }
        public IActionResult UserActivate()
        {
            return View("ActivationUser");
        }
        public IActionResult Dispute()
        {
            return View("ChatRoomList");
        }
        public IActionResult ProductReview(int id)
        {
            return View("ProductReviewList");
        }
        public IActionResult Settings()
        {
            return View("Settings");
        }
        public IActionResult Discount()
        {
            return View("DiscountList");
        }
        public IActionResult DiscountDetail(int id)
        {
            return View("DiscountDetail");
        }
        public IActionResult DiscountAdd()
        {
            return View("DiscountAdd");
        }
        public IActionResult DiscountEdit(int id)
        {
            return View("DiscountEdit");
        }
    }
}