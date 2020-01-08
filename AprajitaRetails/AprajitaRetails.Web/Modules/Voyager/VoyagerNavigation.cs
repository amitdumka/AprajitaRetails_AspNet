using Serenity.Navigation;
using MyPages = AprajitaRetails.Voyager.Pages;

[assembly: NavigationMenu(8599, "Voyager", icon: "fa-book")]
[assembly: NavigationLink(int.MaxValue, "Voyager/Import In Wards", typeof(MyPages.ImportInWardsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Voyager/Import Purchases", typeof(MyPages.ImportPurchasesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Voyager/Import Sale Item Wises", typeof(MyPages.ImportSaleItemWisesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Voyager/Import Sale Registers", typeof(MyPages.ImportSaleRegistersController), icon: null)]