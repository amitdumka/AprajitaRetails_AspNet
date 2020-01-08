
namespace AprajitaRetails.Voyager.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ImportInWardsRow))]
    public class ImportInWardsController : Controller
    {
        [Route("Voyager/ImportInWards")]
        public ActionResult Index()
        {
            return View("~/Modules/Voyager/ImportInWards/ImportInWardsIndex.cshtml");
        }
    }
}