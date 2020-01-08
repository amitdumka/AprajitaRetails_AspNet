
namespace AprajitaRetails.Product.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.StocksRow))]
    public class StocksController : Controller
    {
        [Route("Product/Stocks")]
        public ActionResult Index()
        {
            return View("~/Modules/Product/Stocks/StocksIndex.cshtml");
        }
    }
}