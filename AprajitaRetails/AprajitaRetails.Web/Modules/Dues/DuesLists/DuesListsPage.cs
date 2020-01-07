
namespace AprajitaRetails.Dues.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DuesListsRow))]
    public class DuesListsController : Controller
    {
        [Route("Dues/DuesLists")]
        public ActionResult Index()
        {
            return View("~/Modules/Dues/DuesLists/DuesListsIndex.cshtml");
        }
    }
}