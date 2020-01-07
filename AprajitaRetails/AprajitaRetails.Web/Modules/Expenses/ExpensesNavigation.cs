using Serenity.Navigation;
using MyPages = AprajitaRetails.Expenses.Pages;

[assembly: NavigationMenu(6700, "Expenses", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "Expenses/Cash Payments", typeof(MyPages.CashPaymentsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Expenses/Expenses", typeof(MyPages.ExpensesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Expenses/Payments", typeof(MyPages.PaymentsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Expenses/Petty Cash Expenses", typeof(MyPages.PettyCashExpensesController), icon: null)]