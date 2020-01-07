
namespace AprajitaRetails.PayRoll.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SalaryPaymentsRow))]
    public class SalaryPaymentsController : Controller
    {
        [Route("PayRoll/SalaryPayments")]
        public ActionResult Index()
        {
            return View("~/Modules/PayRoll/SalaryPayments/SalaryPaymentsIndex.cshtml");
        }
    }
}