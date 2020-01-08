
namespace AprajitaRetails.Sales.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SalePaymentDetailsRow))]
    public class SalePaymentDetailsController : Controller
    {
        [Route("Sales/SalePaymentDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Sales/SalePaymentDetails/SalePaymentDetailsIndex.cshtml");
        }
    }
}