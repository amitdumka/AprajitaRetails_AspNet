﻿
namespace AprajitaRetails.Banking.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AccountNumbersRow))]
    public class AccountNumbersController : Controller
    {
        [Route("Banking/AccountNumbers")]
        public ActionResult Index()
        {
            return View("~/Modules/Banking/AccountNumbers/AccountNumbersIndex.cshtml");
        }
    }
}