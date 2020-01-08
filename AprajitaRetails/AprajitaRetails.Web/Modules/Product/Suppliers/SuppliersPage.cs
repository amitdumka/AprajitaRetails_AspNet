
namespace AprajitaRetails.Product.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SuppliersRow))]
    public class SuppliersController : Controller
    {
        [Route("Product/Suppliers")]
        public ActionResult Index()
        {
            return View("~/Modules/Product/Suppliers/SuppliersIndex.cshtml");
        }
    }
}