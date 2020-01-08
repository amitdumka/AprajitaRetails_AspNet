
namespace AprajitaRetails.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PurchaseTaxTypesRow))]
    public class PurchaseTaxTypesController : Controller
    {
        [Route("Accounts/PurchaseTaxTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/PurchaseTaxTypes/PurchaseTaxTypesIndex.cshtml");
        }
    }
}