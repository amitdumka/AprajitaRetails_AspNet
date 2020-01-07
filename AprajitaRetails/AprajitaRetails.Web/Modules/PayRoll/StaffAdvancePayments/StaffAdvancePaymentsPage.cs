
namespace AprajitaRetails.PayRoll.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.StaffAdvancePaymentsRow))]
    public class StaffAdvancePaymentsController : Controller
    {
        [Route("PayRoll/StaffAdvancePayments")]
        public ActionResult Index()
        {
            return View("~/Modules/PayRoll/StaffAdvancePayments/StaffAdvancePaymentsIndex.cshtml");
        }
    }
}