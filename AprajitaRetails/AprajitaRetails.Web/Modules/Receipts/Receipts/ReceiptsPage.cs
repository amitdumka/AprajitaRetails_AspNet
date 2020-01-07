
namespace AprajitaRetails.Receipts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ReceiptsRow))]
    public class ReceiptsController : Controller
    {
        [Route("Receipts/Receipts")]
        public ActionResult Index()
        {
            return View("~/Modules/Receipts/Receipts/ReceiptsIndex.cshtml");
        }
    }
}