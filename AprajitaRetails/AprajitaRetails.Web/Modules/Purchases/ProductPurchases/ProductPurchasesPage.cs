
namespace AprajitaRetails.Purchases.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProductPurchasesRow))]
    public class ProductPurchasesController : Controller
    {
        [Route("Purchases/ProductPurchases")]
        public ActionResult Index()
        {
            return View("~/Modules/Purchases/ProductPurchases/ProductPurchasesIndex.cshtml");
        }
    }
}