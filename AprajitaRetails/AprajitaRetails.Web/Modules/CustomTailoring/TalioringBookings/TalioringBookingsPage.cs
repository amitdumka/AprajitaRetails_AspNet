
namespace AprajitaRetails.CustomTailoring.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TalioringBookingsRow))]
    public class TalioringBookingsController : Controller
    {
        [Route("CustomTailoring/TalioringBookings")]
        public ActionResult Index()
        {
            return View("~/Modules/CustomTailoring/TalioringBookings/TalioringBookingsIndex.cshtml");
        }
    }
}