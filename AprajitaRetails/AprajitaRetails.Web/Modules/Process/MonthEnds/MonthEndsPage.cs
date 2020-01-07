
namespace AprajitaRetails.Process.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MonthEndsRow))]
    public class MonthEndsController : Controller
    {
        [Route("Process/MonthEnds")]
        public ActionResult Index()
        {
            return View("~/Modules/Process/MonthEnds/MonthEndsIndex.cshtml");
        }
    }
}