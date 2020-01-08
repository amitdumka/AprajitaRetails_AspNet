using Serenity.Navigation;
using MyPages = AprajitaRetails.Accounts.Pages;

[assembly: NavigationMenu(6000, "Accounts", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "Accounts/Cash In Banks", typeof(MyPages.CashInBanksController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Accounts/Cash In Hands", typeof(MyPages.CashInHandsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Accounts/Transcation Modes", typeof(MyPages.TranscationModesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Accounts/Suspense Accounts", typeof(MyPages.SuspenseAccountsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Accounts/Purchase Tax Types", typeof(MyPages.PurchaseTaxTypesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Accounts/Sale Tax Types", typeof(MyPages.SaleTaxTypesController), icon: null)]