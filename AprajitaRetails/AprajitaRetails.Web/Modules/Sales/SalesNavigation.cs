using Serenity.Navigation;
using MyPages = AprajitaRetails.Sales.Pages;

[assembly: NavigationMenu(2000, "Sales", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "Sales/Daily Sales", typeof(MyPages.DailySalesController), icon: null)]