
namespace AprajitaRetails.Tally.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.LedgerEntriesRow))]
    public class LedgerEntriesController : Controller
    {
        [Route("Tally/LedgerEntries")]
        public ActionResult Index()
        {
            return View("~/Modules/Tally/LedgerEntries/LedgerEntriesIndex.cshtml");
        }
    }
}