
namespace AprajitaRetails.PayRoll.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CurrentSalariesRow))]
    public class CurrentSalariesController : Controller
    {
        [Route("PayRoll/CurrentSalaries")]
        public ActionResult Index()
        {
            return View("~/Modules/PayRoll/CurrentSalaries/CurrentSalariesIndex.cshtml");
        }
    }
}