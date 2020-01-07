
namespace AprajitaRetails.PayRoll.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.EmployeesRow))]
    public class EmployeesController : Controller
    {
        [Route("PayRoll/Employees")]
        public ActionResult Index()
        {
            return View("~/Modules/PayRoll/Employees/EmployeesIndex.cshtml");
        }
    }
}