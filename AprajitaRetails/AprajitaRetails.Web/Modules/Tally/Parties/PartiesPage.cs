
namespace AprajitaRetails.Tally.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PartiesRow))]
    public class PartiesController : Controller
    {
        [Route("Tally/Parties")]
        public ActionResult Index()
        {
            return View("~/Modules/Tally/Parties/PartiesIndex.cshtml");
        }
    }
}