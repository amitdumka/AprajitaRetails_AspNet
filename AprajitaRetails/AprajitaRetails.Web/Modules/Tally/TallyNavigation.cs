using Serenity.Navigation;
using MyPages = AprajitaRetails.Tally.Pages;

[assembly: NavigationMenu(8499, "Tally", icon: "fa-book")]
[assembly: NavigationLink(int.MaxValue, "Tally/Parties", typeof(MyPages.PartiesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Tally/Ledger Masters", typeof(MyPages.LedgerMastersController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Tally/Ledger Entries", typeof(MyPages.LedgerEntriesController), icon: null)]