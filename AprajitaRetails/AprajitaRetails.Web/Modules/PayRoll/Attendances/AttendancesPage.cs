
namespace AprajitaRetails.PayRoll.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AttendancesRow))]
    public class AttendancesController : Controller
    {
        [Route("PayRoll/Attendances")]
        public ActionResult Index()
        {
            return View("~/Modules/PayRoll/Attendances/AttendancesIndex.cshtml");
        }
    }
}