
namespace AprajitaRetails.Sales.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SalesmenRow))]
    public class SalesmenController : Controller
    {
        [Route("Sales/Salesmen")]
        public ActionResult Index()
        {
            return View("~/Modules/Sales/Salesmen/SalesmenIndex.cshtml");
        }
    }
}