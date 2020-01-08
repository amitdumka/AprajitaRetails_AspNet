using Serenity.Navigation;
using MyPages = AprajitaRetails.Stores.Pages;

[assembly: NavigationMenu(8600, "Stores", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "Stores/Stores", typeof(MyPages.StoresController), icon: null)]