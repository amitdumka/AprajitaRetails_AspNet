
namespace AprajitaRetails.Product.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BrandsRow))]
    public class BrandsController : Controller
    {
        [Route("Product/Brands")]
        public ActionResult Index()
        {
            return View("~/Modules/Product/Brands/BrandsIndex.cshtml");
        }
    }
}