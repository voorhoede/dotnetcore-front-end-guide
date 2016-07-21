using Microsoft.AspNetCore.Mvc;

namespace dotnetcore_front_end_guide.Controllers
{
    public class ViewerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
