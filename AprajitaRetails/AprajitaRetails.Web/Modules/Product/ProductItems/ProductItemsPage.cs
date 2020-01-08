
namespace AprajitaRetails.Product.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProductItemsRow))]
    public class ProductItemsController : Controller
    {
        [Route("Product/ProductItems")]
        public ActionResult Index()
        {
            return View("~/Modules/Product/ProductItems/ProductItemsIndex.cshtml");
        }
    }
}