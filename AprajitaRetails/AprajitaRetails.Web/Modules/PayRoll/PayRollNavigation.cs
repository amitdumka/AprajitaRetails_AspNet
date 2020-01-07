using Serenity.Navigation;
//using MyPages = AprajitaRetails.Payroll.Pages;
using MyPages = AprajitaRetails.PayRoll.Pages;

[assembly: NavigationMenu(6600, "PayRoll", icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "PayRoll/Employees", typeof(MyPages.EmployeesController), icon: "fa-user")]
[assembly: NavigationLink(int.MaxValue, "PayRoll/Attendances", typeof(MyPages.AttendancesController), icon: "fa-book")]
[assembly: NavigationLink(int.MaxValue, "PayRoll/Salary Payments", typeof(MyPages.SalaryPaymentsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PayRoll/Staff Advance Payments", typeof(MyPages.StaffAdvancePaymentsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PayRoll/Staff Advance Receipts", typeof(MyPages.StaffAdvanceReceiptsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PayRoll/Current Salaries", typeof(MyPages.CurrentSalariesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PayRoll/Pay Slips", typeof(MyPages.PaySlipsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PayRoll/Salesmen", typeof(MyPages.SalesmenController), icon: null)]