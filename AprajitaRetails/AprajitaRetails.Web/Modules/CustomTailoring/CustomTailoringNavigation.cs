using Serenity.Navigation;
using MyPages = AprajitaRetails.CustomTailoring.Pages;

[assembly: NavigationMenu(5000, "CustomTailoring", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "CustomTailoring/Talioring Bookings", typeof(MyPages.TalioringBookingsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "CustomTailoring/Talioring Deliveries", typeof(MyPages.TalioringDeliveriesController), icon: null)]