
namespace AprajitaRetails.Banking.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BankDepositsRow))]
    public class BankDepositsController : Controller
    {
        [Route("Banking/BankDeposits")]
        public ActionResult Index()
        {
            return View("~/Modules/Banking/BankDeposits/BankDepositsIndex.cshtml");
        }
    }
}