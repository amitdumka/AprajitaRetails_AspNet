
namespace AprajitaRetails.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SaleTaxTypesRow))]
    public class SaleTaxTypesController : Controller
    {
        [Route("Accounts/SaleTaxTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/SaleTaxTypes/SaleTaxTypesIndex.cshtml");
        }
    }
}