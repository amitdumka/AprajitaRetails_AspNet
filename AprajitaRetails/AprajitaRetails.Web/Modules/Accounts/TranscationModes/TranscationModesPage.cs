
namespace AprajitaRetails.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TranscationModesRow))]
    public class TranscationModesController : Controller
    {
        [Route("Accounts/TranscationModes")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/TranscationModes/TranscationModesIndex.cshtml");
        }
    }
}