
namespace AprajitaRetails.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CashInBanksRow))]
    public class CashInBanksController : Controller
    {
        [Route("Accounts/CashInBanks")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/CashInBanks/CashInBanksIndex.cshtml");
        }
    }
}