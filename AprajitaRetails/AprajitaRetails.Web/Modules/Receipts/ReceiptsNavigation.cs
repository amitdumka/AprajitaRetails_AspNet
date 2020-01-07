using Serenity.Navigation;
using MyPages = AprajitaRetails.Receipts.Pages;

[assembly: NavigationMenu(6500, "Receipts", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "Receipts/Cash Receipts", typeof(MyPages.CashReceiptsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Receipts/Receipts", typeof(MyPages.ReceiptsController), icon: null)]