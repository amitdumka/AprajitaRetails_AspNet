
namespace AprajitaRetails.Banking.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ChequesLogsRow))]
    public class ChequesLogsController : Controller
    {
        [Route("Banking/ChequesLogs")]
        public ActionResult Index()
        {
            return View("~/Modules/Banking/ChequesLogs/ChequesLogsIndex.cshtml");
        }
    }
}