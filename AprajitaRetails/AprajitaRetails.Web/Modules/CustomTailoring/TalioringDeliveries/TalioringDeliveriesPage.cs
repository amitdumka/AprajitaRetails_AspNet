
namespace AprajitaRetails.CustomTailoring.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TalioringDeliveriesRow))]
    public class TalioringDeliveriesController : Controller
    {
        [Route("CustomTailoring/TalioringDeliveries")]
        public ActionResult Index()
        {
            return View("~/Modules/CustomTailoring/TalioringDeliveries/TalioringDeliveriesIndex.cshtml");
        }
    }
}