using Serenity.Navigation;
using MyPages = AprajitaRetails.Purchases.Pages;

[assembly: NavigationLink(int.MaxValue, "Purchases/Product Purchases", typeof(MyPages.ProductPurchasesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Purchases/Purchase Items", typeof(MyPages.PurchaseItemsController), icon: null)]