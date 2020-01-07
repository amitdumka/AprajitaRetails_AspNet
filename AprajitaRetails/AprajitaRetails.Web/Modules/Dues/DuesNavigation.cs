using Serenity.Navigation;
using MyPages = AprajitaRetails.Dues.Pages;

[assembly: NavigationMenu(6400, "Dues", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "Dues/Due Recoverds", typeof(MyPages.DueRecoverdsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Dues/Dues Lists", typeof(MyPages.DuesListsController), icon: null)]