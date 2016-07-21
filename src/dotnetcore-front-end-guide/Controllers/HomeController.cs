using Microsoft.AspNetCore.Mvc;

namespace dotnetcore_front_end_guide.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "Home Page";
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
