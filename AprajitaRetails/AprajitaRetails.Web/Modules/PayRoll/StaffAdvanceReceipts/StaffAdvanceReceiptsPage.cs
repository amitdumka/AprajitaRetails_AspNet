
namespace AprajitaRetails.PayRoll.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.StaffAdvanceReceiptsRow))]
    public class StaffAdvanceReceiptsController : Controller
    {
        [Route("PayRoll/StaffAdvanceReceipts")]
        public ActionResult Index()
        {
            return View("~/Modules/PayRoll/StaffAdvanceReceipts/StaffAdvanceReceiptsIndex.cshtml");
        }
    }
}