
namespace AprajitaRetails.Dues.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DueRecoverdsRow))]
    public class DueRecoverdsController : Controller
    {
        [Route("Dues/DueRecoverds")]
        public ActionResult Index()
        {
            return View("~/Modules/Dues/DueRecoverds/DueRecoverdsIndex.cshtml");
        }
    }
}