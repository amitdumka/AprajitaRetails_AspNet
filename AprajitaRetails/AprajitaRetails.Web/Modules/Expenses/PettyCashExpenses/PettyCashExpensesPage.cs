
namespace AprajitaRetails.Expenses.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PettyCashExpensesRow))]
    public class PettyCashExpensesController : Controller
    {
        [Route("Expenses/PettyCashExpenses")]
        public ActionResult Index()
        {
            return View("~/Modules/Expenses/PettyCashExpenses/PettyCashExpensesIndex.cshtml");
        }
    }
}