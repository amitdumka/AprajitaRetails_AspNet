
namespace AprajitaRetails.Expenses.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PaymentsRow))]
    public class PaymentsController : Controller
    {
        [Route("Expenses/Payments")]
        public ActionResult Index()
        {
            return View("~/Modules/Expenses/Payments/PaymentsIndex.cshtml");
        }
    }
}