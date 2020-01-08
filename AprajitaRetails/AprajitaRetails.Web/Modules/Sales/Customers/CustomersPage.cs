
namespace AprajitaRetails.Sales.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CustomersRow))]
    public class CustomersController : Controller
    {
        [Route("Sales/Customers")]
        public ActionResult Index()
        {
            return View("~/Modules/Sales/Customers/CustomersIndex.cshtml");
        }
    }
}