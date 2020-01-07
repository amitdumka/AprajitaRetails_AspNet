
namespace AprajitaRetails.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SuspenseAccountsRow))]
    public class SuspenseAccountsController : Controller
    {
        [Route("Accounts/SuspenseAccounts")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/SuspenseAccounts/SuspenseAccountsIndex.cshtml");
        }
    }
}