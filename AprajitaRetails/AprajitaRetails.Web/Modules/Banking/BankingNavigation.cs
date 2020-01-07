using Serenity.Navigation;
using MyPages = AprajitaRetails.Banking.Pages;

[assembly: NavigationMenu(7000, "Banking", icon: "fa-bank")]
[assembly: NavigationLink(int.MaxValue, "Banking/Banks", typeof(MyPages.BanksController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Banking/Account Numbers", typeof(MyPages.AccountNumbersController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Banking/Bank Deposits", typeof(MyPages.BankDepositsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Banking/Bank Withdrawals", typeof(MyPages.BankWithdrawalsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Banking/Cheques Logs", typeof(MyPages.ChequesLogsController), icon: null)]