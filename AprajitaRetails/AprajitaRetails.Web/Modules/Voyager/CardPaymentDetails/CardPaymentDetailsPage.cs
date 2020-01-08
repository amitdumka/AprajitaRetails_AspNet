
namespace AprajitaRetails.Voyager.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CardPaymentDetailsRow))]
    public class CardPaymentDetailsController : Controller
    {
        [Route("Voyager/CardPaymentDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Voyager/CardPaymentDetails/CardPaymentDetailsIndex.cshtml");
        }
    }
}