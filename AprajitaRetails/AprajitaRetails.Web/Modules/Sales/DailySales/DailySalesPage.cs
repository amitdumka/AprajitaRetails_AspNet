
namespace AprajitaRetails.Sales.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DailySalesRow))]
    public class DailySalesController : Controller
    {
        [Route("Sales/DailySales")]
        public ActionResult Index()
        {
            return View("~/Modules/Sales/DailySales/DailySalesIndex.cshtml");
        }
    }
}