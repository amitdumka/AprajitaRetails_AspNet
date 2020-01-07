
namespace AprajitaRetails.Tailors.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TailoringStaffAdvancePaymentsRow))]
    public class TailoringStaffAdvancePaymentsController : Controller
    {
        [Route("Tailors/TailoringStaffAdvancePayments")]
        public ActionResult Index()
        {
            return View("~/Modules/Tailors/TailoringStaffAdvancePayments/TailoringStaffAdvancePaymentsIndex.cshtml");
        }
    }
}