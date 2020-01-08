
namespace AprajitaRetails.Purchases.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PurchaseItemsRow))]
    public class PurchaseItemsController : Controller
    {
        [Route("Purchases/PurchaseItems")]
        public ActionResult Index()
        {
            return View("~/Modules/Purchases/PurchaseItems/PurchaseItemsIndex.cshtml");
        }
    }
}