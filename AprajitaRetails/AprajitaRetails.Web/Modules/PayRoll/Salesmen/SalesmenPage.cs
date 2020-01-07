
namespace AprajitaRetails.PayRoll.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SalesmenRow))]
    public class SalesmenController : Controller
    {
        [Route("PayRoll/Salesmen")]
        public ActionResult Index()
        {
            return View("~/Modules/PayRoll/Salesmen/SalesmenIndex.cshtml");
        }
    }
}