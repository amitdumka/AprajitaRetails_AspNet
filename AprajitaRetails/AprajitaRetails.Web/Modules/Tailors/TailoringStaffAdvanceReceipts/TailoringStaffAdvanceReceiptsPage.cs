
namespace AprajitaRetails.Tailors.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TailoringStaffAdvanceReceiptsRow))]
    public class TailoringStaffAdvanceReceiptsController : Controller
    {
        [Route("Tailors/TailoringStaffAdvanceReceipts")]
        public ActionResult Index()
        {
            return View("~/Modules/Tailors/TailoringStaffAdvanceReceipts/TailoringStaffAdvanceReceiptsIndex.cshtml");
        }
    }
}