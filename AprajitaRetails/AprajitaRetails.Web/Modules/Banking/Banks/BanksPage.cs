
namespace AprajitaRetails.Banking.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BanksRow))]
    public class BanksController : Controller
    {
        [Route("Banking/Banks")]
        public ActionResult Index()
        {
            return View("~/Modules/Banking/Banks/BanksIndex.cshtml");
        }
    }
}