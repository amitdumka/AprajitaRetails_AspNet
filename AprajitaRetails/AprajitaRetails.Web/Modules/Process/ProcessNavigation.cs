using Serenity.Navigation;
using MyPages = AprajitaRetails.Process.Pages;

[assembly: NavigationMenu(6800, "Process", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "Process/End Of Days", typeof(MyPages.EndOfDaysController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Process/Month Ends", typeof(MyPages.MonthEndsController), icon: null)]