using Serenity.Navigation;
using MyPages = AprajitaRetails.Product.Pages;

[assembly: NavigationMenu(2700, "Product", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "Product/Brands", typeof(MyPages.BrandsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Product/Categories", typeof(MyPages.CategoriesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Product/Product Items", typeof(MyPages.ProductItemsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Product/Stocks", typeof(MyPages.StocksController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Product/Suppliers", typeof(MyPages.SuppliersController), icon: null)]