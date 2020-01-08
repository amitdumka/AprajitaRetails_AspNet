
namespace AprajitaRetails.Stores.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.StoresRow))]
    public class StoresController : Controller
    {
        [Route("Stores/Stores")]
        public ActionResult Index()
        {
            return View("~/Modules/Stores/Stores/StoresIndex.cshtml");
        }
    }
}