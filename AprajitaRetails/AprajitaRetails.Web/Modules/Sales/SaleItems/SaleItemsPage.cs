
namespace AprajitaRetails.Sales.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SaleItemsRow))]
    public class SaleItemsController : Controller
    {
        [Route("Sales/SaleItems")]
        public ActionResult Index()
        {
            return View("~/Modules/Sales/SaleItems/SaleItemsIndex.cshtml");
        }
    }
}