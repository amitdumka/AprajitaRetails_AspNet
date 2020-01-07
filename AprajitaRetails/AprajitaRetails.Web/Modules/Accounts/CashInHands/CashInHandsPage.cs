
namespace AprajitaRetails.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CashInHandsRow))]
    public class CashInHandsController : Controller
    {
        [Route("Accounts/CashInHands")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/CashInHands/CashInHandsIndex.cshtml");
        }
    }
}