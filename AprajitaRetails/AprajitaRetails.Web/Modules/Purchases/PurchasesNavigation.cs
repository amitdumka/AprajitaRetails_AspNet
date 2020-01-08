using Serenity.Navigation;
using MyPages = AprajitaRetails.Purchases.Pages;

[assembly: NavigationMenu(2500, "Purchases", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "Purchases/Product Purchases", typeof(MyPages.ProductPurchasesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Purchases/Purchase Items", typeof(MyPages.PurchaseItemsController), icon: null)]