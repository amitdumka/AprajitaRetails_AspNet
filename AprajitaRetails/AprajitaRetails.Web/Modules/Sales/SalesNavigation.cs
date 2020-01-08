using Serenity.Navigation;
using MyPages = AprajitaRetails.Sales.Pages;

[assembly: NavigationMenu(2000, "Sales", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "Sales/Daily Sales", typeof(MyPages.DailySalesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Sales/Sale Invoices", typeof(MyPages.SaleInvoicesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Sales/Sale Items", typeof(MyPages.SaleItemsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Sales/Sale Payment Details", typeof(MyPages.SalePaymentDetailsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Sales/Salesmen", typeof(MyPages.SalesmenController), icon: null)]