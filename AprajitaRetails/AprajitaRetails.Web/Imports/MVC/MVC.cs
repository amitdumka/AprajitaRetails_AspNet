using System;

namespace MVC
{
    public static class Views
    {
        public static class Accounts
        {
            public static class CashInBanks
            {
                public const string CashInBanksIndex = "~/Modules/Accounts/CashInBanks/CashInBanksIndex.cshtml";
            }

            public static class CashInHands
            {
                public const string CashInHandsIndex = "~/Modules/Accounts/CashInHands/CashInHandsIndex.cshtml";
            }

            public static class SuspenseAccounts
            {
                public const string SuspenseAccountsIndex = "~/Modules/Accounts/SuspenseAccounts/SuspenseAccountsIndex.cshtml";
            }

            public static class TranscationModes
            {
                public const string TranscationModesIndex = "~/Modules/Accounts/TranscationModes/TranscationModesIndex.cshtml";
            }

        }

        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Sergen
            {
                public const string SergenError = "~/Modules/Administration/Sergen/SergenError.cshtml";
                public const string SergenIndex = "~/Modules/Administration/Sergen/SergenIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }
        }

        public static class AdminLTE
        {
            public const string Calendar = "~/Modules/AdminLTE/Calendar.cshtml";
            public static class Charts
            {
                public const string ChartJS = "~/Modules/AdminLTE/Charts/ChartJS.cshtml";
                public const string Flot = "~/Modules/AdminLTE/Charts/Flot.cshtml";
                public const string InlineCharts = "~/Modules/AdminLTE/Charts/InlineCharts.cshtml";
                public const string Morris = "~/Modules/AdminLTE/Charts/Morris.cshtml";
            }
            public const string DashboardV2 = "~/Modules/AdminLTE/DashboardV2.cshtml";
            public static class Examples
            {
                public const string BlankPage = "~/Modules/AdminLTE/Examples/BlankPage.cshtml";
                public const string Error404 = "~/Modules/AdminLTE/Examples/Error404.cshtml";
                public const string Error500 = "~/Modules/AdminLTE/Examples/Error500.cshtml";
                public const string Invoice = "~/Modules/AdminLTE/Examples/Invoice.cshtml";
                public const string InvoicePrint = "~/Modules/AdminLTE/Examples/InvoicePrint.cshtml";
                public const string Lockscreen = "~/Modules/AdminLTE/Examples/Lockscreen.cshtml";
                public const string Login = "~/Modules/AdminLTE/Examples/Login.cshtml";
                public const string PacePage = "~/Modules/AdminLTE/Examples/PacePage.cshtml";
                public const string Profile = "~/Modules/AdminLTE/Examples/Profile.cshtml";
                public const string Register = "~/Modules/AdminLTE/Examples/Register.cshtml";
            }

            public static class Forms
            {
                public const string AdvancedElements = "~/Modules/AdminLTE/Forms/AdvancedElements.cshtml";
                public const string GeneralElements = "~/Modules/AdminLTE/Forms/GeneralElements.cshtml";
                public const string TextEditors = "~/Modules/AdminLTE/Forms/TextEditors.cshtml";
            }

            public static class Mailbox
            {
                public const string Compose = "~/Modules/AdminLTE/Mailbox/Compose.cshtml";
                public const string Inbox = "~/Modules/AdminLTE/Mailbox/Inbox.cshtml";
                public const string Read = "~/Modules/AdminLTE/Mailbox/Read.cshtml";
            }

            public static class Tables
            {
                public const string SimpleTables = "~/Modules/AdminLTE/Tables/SimpleTables.cshtml";
            }

            public static class UIElements
            {
                public const string Buttons = "~/Modules/AdminLTE/UIElements/Buttons.cshtml";
                public const string General = "~/Modules/AdminLTE/UIElements/General.cshtml";
                public const string Icons = "~/Modules/AdminLTE/UIElements/Icons.cshtml";
                public const string Modals = "~/Modules/AdminLTE/UIElements/Modals.cshtml";
                public const string Sliders = "~/Modules/AdminLTE/UIElements/Sliders.cshtml";
                public const string Timeline = "~/Modules/AdminLTE/UIElements/Timeline.cshtml";
            }
            public const string Widgets = "~/Modules/AdminLTE/Widgets.cshtml";
        }

        public static class Banking
        {
            public static class AccountNumbers
            {
                public const string AccountNumbersIndex = "~/Modules/Banking/AccountNumbers/AccountNumbersIndex.cshtml";
            }

            public static class BankDeposits
            {
                public const string BankDepositsIndex = "~/Modules/Banking/BankDeposits/BankDepositsIndex.cshtml";
            }

            public static class Banks
            {
                public const string BanksIndex = "~/Modules/Banking/Banks/BanksIndex.cshtml";
            }

            public static class BankWithdrawals
            {
                public const string BankWithdrawalsIndex = "~/Modules/Banking/BankWithdrawals/BankWithdrawalsIndex.cshtml";
            }

            public static class ChequesLogs
            {
                public const string ChequesLogsIndex = "~/Modules/Banking/ChequesLogs/ChequesLogsIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }

        }

        public static class CustomTailoring
        {
            public static class TalioringBookings
            {
                public const string TalioringBookingsIndex = "~/Modules/CustomTailoring/TalioringBookings/TalioringBookingsIndex.cshtml";
            }

            public static class TalioringDeliveries
            {
                public const string TalioringDeliveriesIndex = "~/Modules/CustomTailoring/TalioringDeliveries/TalioringDeliveriesIndex.cshtml";
            }

        }

        public static class Dues
        {
            public static class DueRecoverds
            {
                public const string DueRecoverdsIndex = "~/Modules/Dues/DueRecoverds/DueRecoverdsIndex.cshtml";
            }

            public static class DuesLists
            {
                public const string DuesListsIndex = "~/Modules/Dues/DuesLists/DuesListsIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Expenses
        {
            public static class CashPayments
            {
                public const string CashPaymentsIndex = "~/Modules/Expenses/CashPayments/CashPaymentsIndex.cshtml";
            }

            public static class Expenses_
            {
                public const string ExpensesIndex = "~/Modules/Expenses/Expenses/ExpensesIndex.cshtml";
            }

            public static class Payments
            {
                public const string PaymentsIndex = "~/Modules/Expenses/Payments/PaymentsIndex.cshtml";
            }

            public static class PettyCashExpenses
            {
                public const string PettyCashExpensesIndex = "~/Modules/Expenses/PettyCashExpenses/PettyCashExpensesIndex.cshtml";
            }

        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }

        }

        public static class PayRoll
        {
            public static class Attendances
            {
                public const string AttendancesIndex = "~/Modules/PayRoll/Attendances/AttendancesIndex.cshtml";
            }

            public static class CurrentSalaries
            {
                public const string CurrentSalariesIndex = "~/Modules/PayRoll/CurrentSalaries/CurrentSalariesIndex.cshtml";
            }

            public static class Employees
            {
                public const string EmployeesIndex = "~/Modules/PayRoll/Employees/EmployeesIndex.cshtml";
            }

            public static class PaySlips
            {
                public const string PaySlipsIndex = "~/Modules/PayRoll/PaySlips/PaySlipsIndex.cshtml";
            }

            public static class SalaryPayments
            {
                public const string SalaryPaymentsIndex = "~/Modules/PayRoll/SalaryPayments/SalaryPaymentsIndex.cshtml";
            }

            public static class Salesmen
            {
                public const string SalesmenIndex = "~/Modules/PayRoll/Salesmen/SalesmenIndex.cshtml";
            }

            public static class StaffAdvancePayments
            {
                public const string StaffAdvancePaymentsIndex = "~/Modules/PayRoll/StaffAdvancePayments/StaffAdvancePaymentsIndex.cshtml";
            }

            public static class StaffAdvanceReceipts
            {
                public const string StaffAdvanceReceiptsIndex = "~/Modules/PayRoll/StaffAdvanceReceipts/StaffAdvanceReceiptsIndex.cshtml";
            }

        }

        public static class Process
        {
            public static class EndOfDays
            {
                public const string EndOfDaysIndex = "~/Modules/Process/EndOfDays/EndOfDaysIndex.cshtml";
            }

            public static class MonthEnds
            {
                public const string MonthEndsIndex = "~/Modules/Process/MonthEnds/MonthEndsIndex.cshtml";
            }

        }

        public static class Receipts
        {
            public static class CashReceipts
            {
                public const string CashReceiptsIndex = "~/Modules/Receipts/CashReceipts/CashReceiptsIndex.cshtml";
            }

            public static class Receipts_
            {
                public const string ReceiptsIndex = "~/Modules/Receipts/Receipts/ReceiptsIndex.cshtml";
            }

        }

        public static class Sales
        {
            public static class DailySales
            {
                public const string DailySalesIndex = "~/Modules/Sales/DailySales/DailySalesIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

        public static class Tailors
        {
            public static class TailorAttendances
            {
                public const string TailorAttendancesIndex = "~/Modules/Tailors/TailorAttendances/TailorAttendancesIndex.cshtml";
            }

            public static class TailoringEmployees
            {
                public const string TailoringEmployeesIndex = "~/Modules/Tailors/TailoringEmployees/TailoringEmployeesIndex.cshtml";
            }

            public static class TailoringSalaryPayments
            {
                public const string TailoringSalaryPaymentsIndex = "~/Modules/Tailors/TailoringSalaryPayments/TailoringSalaryPaymentsIndex.cshtml";
            }

            public static class TailoringStaffAdvancePayments
            {
                public const string TailoringStaffAdvancePaymentsIndex = "~/Modules/Tailors/TailoringStaffAdvancePayments/TailoringStaffAdvancePaymentsIndex.cshtml";
            }

            public static class TailoringStaffAdvanceReceipts
            {
                public const string TailoringStaffAdvanceReceiptsIndex = "~/Modules/Tailors/TailoringStaffAdvanceReceipts/TailoringStaffAdvanceReceiptsIndex.cshtml";
            }

        }

    }
}
