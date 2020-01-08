
namespace AprajitaRetails.Tally.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.LedgerMastersRow))]
    public class LedgerMastersController : Controller
    {
        [Route("Tally/LedgerMasters")]
        public ActionResult Index()
        {
            return View("~/Modules/Tally/LedgerMasters/LedgerMastersIndex.cshtml");
        }
    }
}