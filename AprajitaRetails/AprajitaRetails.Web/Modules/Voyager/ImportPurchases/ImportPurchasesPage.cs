
namespace AprajitaRetails.Voyager.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ImportPurchasesRow))]
    public class ImportPurchasesController : Controller
    {
        [Route("Voyager/ImportPurchases")]
        public ActionResult Index()
        {
            return View("~/Modules/Voyager/ImportPurchases/ImportPurchasesIndex.cshtml");
        }
    }
}