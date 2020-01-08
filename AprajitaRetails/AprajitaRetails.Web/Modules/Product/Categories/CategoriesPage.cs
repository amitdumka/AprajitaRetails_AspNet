
namespace AprajitaRetails.Product.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CategoriesRow))]
    public class CategoriesController : Controller
    {
        [Route("Product/Categories")]
        public ActionResult Index()
        {
            return View("~/Modules/Product/Categories/CategoriesIndex.cshtml");
        }
    }
}