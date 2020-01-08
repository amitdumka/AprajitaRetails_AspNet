
namespace AprajitaRetails.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CardPaymentDetailsRow))]
    public class CardPaymentDetailsController : Controller
    {
        [Route("Accounts/CardPaymentDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/CardPaymentDetails/CardPaymentDetailsIndex.cshtml");
        }
    }
}