
namespace AprajitaRetails.Tailors.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TailorAttendancesRow))]
    public class TailorAttendancesController : Controller
    {
        [Route("Tailors/TailorAttendances")]
        public ActionResult Index()
        {
            return View("~/Modules/Tailors/TailorAttendances/TailorAttendancesIndex.cshtml");
        }
    }
}