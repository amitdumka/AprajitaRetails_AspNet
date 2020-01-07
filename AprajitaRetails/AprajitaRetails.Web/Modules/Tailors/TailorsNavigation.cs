using Serenity.Navigation;
using MyPages = AprajitaRetails.Tailors.Pages;


[assembly: NavigationMenu(6750, "Tailors", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "Tailors/Tailoring Employees", typeof(MyPages.TailoringEmployeesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Tailors/Tailor Attendances", typeof(MyPages.TailorAttendancesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Tailors/Tailoring Salary Payments", typeof(MyPages.TailoringSalaryPaymentsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Tailors/Tailoring Staff Advance Payments", typeof(MyPages.TailoringStaffAdvancePaymentsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Tailors/Tailoring Staff Advance Receipts", typeof(MyPages.TailoringStaffAdvanceReceiptsController), icon: null)]