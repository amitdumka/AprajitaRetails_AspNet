
namespace AprajitaRetails.Banking.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BankWithdrawalsRow))]
    public class BankWithdrawalsController : Controller
    {
        [Route("Banking/BankWithdrawals")]
        public ActionResult Index()
        {
            return View("~/Modules/Banking/BankWithdrawals/BankWithdrawalsIndex.cshtml");
        }
    }
}