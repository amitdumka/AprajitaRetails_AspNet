
namespace AprajitaRetails.Voyager.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ImportSaleRegistersRow))]
    public class ImportSaleRegistersController : Controller
    {
        [Route("Voyager/ImportSaleRegisters")]
        public ActionResult Index()
        {
            return View("~/Modules/Voyager/ImportSaleRegisters/ImportSaleRegistersIndex.cshtml");
        }
    }
}