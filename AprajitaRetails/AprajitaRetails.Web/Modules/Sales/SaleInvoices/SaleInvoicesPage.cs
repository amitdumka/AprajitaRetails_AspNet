
namespace AprajitaRetails.Sales.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SaleInvoicesRow))]
    public class SaleInvoicesController : Controller
    {
        [Route("Sales/SaleInvoices")]
        public ActionResult Index()
        {
            return View("~/Modules/Sales/SaleInvoices/SaleInvoicesIndex.cshtml");
        }
    }
}