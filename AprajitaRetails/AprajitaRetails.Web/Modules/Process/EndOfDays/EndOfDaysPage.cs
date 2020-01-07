
namespace AprajitaRetails.Process.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.EndOfDaysRow))]
    public class EndOfDaysController : Controller
    {
        [Route("Process/EndOfDays")]
        public ActionResult Index()
        {
            return View("~/Modules/Process/EndOfDays/EndOfDaysIndex.cshtml");
        }
    }
}