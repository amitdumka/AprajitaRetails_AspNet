
namespace AprajitaRetails.Expenses.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CashPaymentsRow))]
    public class CashPaymentsController : Controller
    {
        [Route("Expenses/CashPayments")]
        public ActionResult Index()
        {
            return View("~/Modules/Expenses/CashPayments/CashPaymentsIndex.cshtml");
        }
    }
}