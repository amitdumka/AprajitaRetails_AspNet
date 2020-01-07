
namespace AprajitaRetails.Receipts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CashReceiptsRow))]
    public class CashReceiptsController : Controller
    {
        [Route("Receipts/CashReceipts")]
        public ActionResult Index()
        {
            return View("~/Modules/Receipts/CashReceipts/CashReceiptsIndex.cshtml");
        }
    }
}