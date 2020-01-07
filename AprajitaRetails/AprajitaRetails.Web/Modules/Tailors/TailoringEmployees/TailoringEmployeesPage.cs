
namespace AprajitaRetails.Tailors.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TailoringEmployeesRow))]
    public class TailoringEmployeesController : Controller
    {
        [Route("Tailors/TailoringEmployees")]
        public ActionResult Index()
        {
            return View("~/Modules/Tailors/TailoringEmployees/TailoringEmployeesIndex.cshtml");
        }
    }
}