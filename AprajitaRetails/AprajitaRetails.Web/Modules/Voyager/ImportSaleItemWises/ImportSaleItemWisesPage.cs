
namespace AprajitaRetails.Voyager.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ImportSaleItemWisesRow))]
    public class ImportSaleItemWisesController : Controller
    {
        [Route("Voyager/ImportSaleItemWises")]
        public ActionResult Index()
        {
            return View("~/Modules/Voyager/ImportSaleItemWises/ImportSaleItemWisesIndex.cshtml");
        }
    }
}