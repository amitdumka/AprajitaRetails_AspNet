
namespace AprajitaRetails.Tailors.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TailoringSalaryPaymentsRow))]
    public class TailoringSalaryPaymentsController : Controller
    {
        [Route("Tailors/TailoringSalaryPayments")]
        public ActionResult Index()
        {
            return View("~/Modules/Tailors/TailoringSalaryPayments/TailoringSalaryPaymentsIndex.cshtml");
        }
    }
}