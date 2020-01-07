
namespace AprajitaRetails.PayRoll.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PaySlipsRow))]
    public class PaySlipsController : Controller
    {
        [Route("PayRoll/PaySlips")]
        public ActionResult Index()
        {
            return View("~/Modules/PayRoll/PaySlips/PaySlipsIndex.cshtml");
        }
    }
}