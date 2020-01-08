namespace AprajitaRetails.Texts {

    declare namespace Db {

        namespace Accounts {

            namespace CashInBanks {
                export const CashIn: string;
                export const CashInBankId: string;
                export const CashOut: string;
                export const CibDate: string;
                export const ClosingBalance: string;
                export const OpenningBalance: string;
            }

            namespace CashInHands {
                export const CashIn: string;
                export const CashInHandId: string;
                export const CashOut: string;
                export const CihDate: string;
                export const ClosingBalance: string;
                export const OpenningBalance: string;
            }

            namespace PurchaseTaxTypes {
                export const CompositeRate: string;
                export const PurchaseTaxTypeId: string;
                export const TaxName: string;
                export const TaxType: string;
            }

            namespace SaleTaxTypes {
                export const CompositeRate: string;
                export const SaleTaxTypeId: string;
                export const TaxName: string;
                export const TaxType: string;
            }

            namespace SuspenseAccounts {
                export const ClearedDetails: string;
                export const EntryDate: string;
                export const InAmount: string;
                export const IsCleared: string;
                export const OutAmount: string;
                export const ReferanceDetails: string;
                export const ReviewBy: string;
                export const SuspenseAccountId: string;
            }

            namespace TranscationModes {
                export const Transcation: string;
                export const TranscationModeId: string;
            }
        }

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Banking {

            namespace AccountNumbers {
                export const Account: string;
                export const AccountNumberId: string;
                export const BankBankName: string;
                export const BankId: string;
            }

            namespace BankDeposits {
                export const AccountNumberAccount: string;
                export const AccountNumberBankId: string;
                export const AccountNumberId: string;
                export const Amount: string;
                export const BankDepositId: string;
                export const DepoDate: string;
                export const Details: string;
                export const PayMode: string;
                export const Remarks: string;
            }

            namespace BankWithdrawals {
                export const AccountNumberAccount: string;
                export const AccountNumberBankId: string;
                export const AccountNumberId: string;
                export const Amount: string;
                export const ApprovedBy: string;
                export const BankWithdrawalId: string;
                export const ChequeNo: string;
                export const DepoDate: string;
                export const InNameOf: string;
                export const SignedBy: string;
            }

            namespace Banks {
                export const BankId: string;
                export const BankName: string;
            }

            namespace ChequesLogs {
                export const AccountNumber: string;
                export const Amount: string;
                export const BankName: string;
                export const ChequesDate: string;
                export const ChequesLogId: string;
                export const ClearedDate: string;
                export const DepositDate: string;
                export const IsDepositedOnAprajitaRetails: string;
                export const IsIssuedByAprajitaRetails: string;
                export const IsPdc: string;
                export const IssuedBy: string;
                export const IssuedTo: string;
                export const Remarks: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace CustomTailoring {

            namespace TalioringBookings {
                export const BookingDate: string;
                export const BookingSlipNo: string;
                export const BundiPrice: string;
                export const BundiQty: string;
                export const CoatPrice: string;
                export const CoatQty: string;
                export const CustName: string;
                export const DeliveryDate: string;
                export const IsDelivered: string;
                export const KurtaPrice: string;
                export const KurtaQty: string;
                export const Others: string;
                export const OthersPrice: string;
                export const PantPrice: string;
                export const PantQty: string;
                export const ShirtPrice: string;
                export const ShirtQty: string;
                export const TalioringBookingId: string;
                export const TotalAmount: string;
                export const TotalQty: string;
                export const TryDate: string;
            }

            namespace TalioringDeliveries {
                export const Amount: string;
                export const DeliveryDate: string;
                export const InvNo: string;
                export const Remarks: string;
                export const TalioringBookingBookingDate: string;
                export const TalioringBookingBookingSlipNo: string;
                export const TalioringBookingBundiPrice: string;
                export const TalioringBookingBundiQty: string;
                export const TalioringBookingCoatPrice: string;
                export const TalioringBookingCoatQty: string;
                export const TalioringBookingCustName: string;
                export const TalioringBookingDeliveryDate: string;
                export const TalioringBookingId: string;
                export const TalioringBookingIsDelivered: string;
                export const TalioringBookingKurtaPrice: string;
                export const TalioringBookingKurtaQty: string;
                export const TalioringBookingOthers: string;
                export const TalioringBookingOthersPrice: string;
                export const TalioringBookingPantPrice: string;
                export const TalioringBookingPantQty: string;
                export const TalioringBookingShirtPrice: string;
                export const TalioringBookingShirtQty: string;
                export const TalioringBookingTotalAmount: string;
                export const TalioringBookingTotalQty: string;
                export const TalioringBookingTryDate: string;
                export const TalioringDeliveryId: string;
            }
        }

        namespace Dues {

            namespace DueRecoverds {
                export const AmountPaid: string;
                export const DueRecoverdId: string;
                export const DuesListAmount: string;
                export const DuesListDailySaleId: string;
                export const DuesListId: string;
                export const DuesListIsPartialRecovery: string;
                export const DuesListIsRecovered: string;
                export const DuesListRecoveryDate: string;
                export const IsPartialPayment: string;
                export const Modes: string;
                export const PaidDate: string;
                export const Remarks: string;
            }

            namespace DuesLists {
                export const Amount: string;
                export const DailySaleAmount: string;
                export const DailySaleCashAmount: string;
                export const DailySaleId: string;
                export const DailySaleInvNo: string;
                export const DailySaleIsDue: string;
                export const DailySaleIsManualBill: string;
                export const DailySaleIsSaleReturn: string;
                export const DailySaleIsTailoringBill: string;
                export const DailySalePayMode: string;
                export const DailySaleRemarks: string;
                export const DailySaleSaleDate: string;
                export const DailySaleSalesmanId: string;
                export const DuesListId: string;
                export const IsPartialRecovery: string;
                export const IsRecovered: string;
                export const RecoveryDate: string;
            }
        }

        namespace Expenses {

            namespace CashPayments {
                export const Amount: string;
                export const CashPaymentId: string;
                export const PaidTo: string;
                export const PaymentDate: string;
                export const SlipNo: string;
                export const TranscationModeId: string;
                export const TranscationModeTranscation: string;
            }

            namespace Expenses {
                export const Amount: string;
                export const EmployeeId: string;
                export const EmployeeIsWorking: string;
                export const EmployeeJoiningDate: string;
                export const EmployeeLeavingDate: string;
                export const EmployeeMobileNo: string;
                export const EmployeeStaffName: string;
                export const ExpDate: string;
                export const ExpenseId: string;
                export const PaidTo: string;
                export const Particulars: string;
                export const PayMode: string;
                export const PaymentDetails: string;
                export const Remarks: string;
            }

            namespace Payments {
                export const Amount: string;
                export const PayDate: string;
                export const PayMode: string;
                export const PaymentDetails: string;
                export const PaymentId: string;
                export const PaymentPartry: string;
                export const PaymentSlipNo: string;
                export const Remarks: string;
            }

            namespace PettyCashExpenses {
                export const Amount: string;
                export const EmployeeId: string;
                export const EmployeeIsWorking: string;
                export const EmployeeJoiningDate: string;
                export const EmployeeLeavingDate: string;
                export const EmployeeMobileNo: string;
                export const EmployeeStaffName: string;
                export const ExpDate: string;
                export const PaidTo: string;
                export const Particulars: string;
                export const PettyCashExpenseId: string;
                export const Remarks: string;
            }
        }

        namespace PayRoll {

            namespace Attendances {
                export const AttDate: string;
                export const AttendanceId: string;
                export const EmployeeId: string;
                export const EmployeeIsWorking: string;
                export const EmployeeJoiningDate: string;
                export const EmployeeLeavingDate: string;
                export const EmployeeMobileNo: string;
                export const EmployeeStaffName: string;
                export const EntryTime: string;
                export const Remarks: string;
                export const Status: string;
            }

            namespace CurrentSalaries {
                export const BasicSalary: string;
                export const CloseDate: string;
                export const CurrentSalaryId: string;
                export const EffectiveDate: string;
                export const EmployeeId: string;
                export const EmployeeIsWorking: string;
                export const EmployeeJoiningDate: string;
                export const EmployeeLeavingDate: string;
                export const EmployeeMobileNo: string;
                export const EmployeeStaffName: string;
                export const IncentiveRate: string;
                export const IncentiveTarget: string;
                export const IsEffective: string;
                export const IsSundayBillable: string;
                export const LpRate: string;
                export const SundaySalary: string;
                export const WowBillRate: string;
                export const WowBillTarget: string;
            }

            namespace Employees {
                export const EmployeeId: string;
                export const IsWorking: string;
                export const JoiningDate: string;
                export const LeavingDate: string;
                export const MobileNo: string;
                export const StaffName: string;
            }

            namespace PaySlips {
                export const AdvanceDeducations: string;
                export const BasicSalary: string;
                export const CurrentSalaryBasicSalary: string;
                export const CurrentSalaryCloseDate: string;
                export const CurrentSalaryEffectiveDate: string;
                export const CurrentSalaryEmployeeId: string;
                export const CurrentSalaryId: string;
                export const CurrentSalaryIncentiveRate: string;
                export const CurrentSalaryIncentiveTarget: string;
                export const CurrentSalaryIsEffective: string;
                export const CurrentSalaryIsSundayBillable: string;
                export const CurrentSalaryLpRate: string;
                export const CurrentSalarySundaySalary: string;
                export const CurrentSalaryWowBillRate: string;
                export const CurrentSalaryWowBillTarget: string;
                export const EmployeeId: string;
                export const EmployeeIsWorking: string;
                export const EmployeeJoiningDate: string;
                export const EmployeeLeavingDate: string;
                export const EmployeeMobileNo: string;
                export const EmployeeStaffName: string;
                export const GrossSalary: string;
                export const LastPCsIncentive: string;
                export const LastPcsAmount: string;
                export const Month: string;
                export const NoOfDaysPresent: string;
                export const OnDate: string;
                export const OtherDeductions: string;
                export const OthersIncentive: string;
                export const PaySlipId: string;
                export const PfDeductions: string;
                export const Remarks: string;
                export const SaleIncentive: string;
                export const StandardDeductions: string;
                export const TdsDeductions: string;
                export const TotalSale: string;
                export const WowBillAmount: string;
                export const WowBillIncentive: string;
                export const Year: string;
            }

            namespace SalaryPayments {
                export const Amount: string;
                export const Details: string;
                export const EmployeeId: string;
                export const EmployeeIsWorking: string;
                export const EmployeeJoiningDate: string;
                export const EmployeeLeavingDate: string;
                export const EmployeeMobileNo: string;
                export const EmployeeStaffName: string;
                export const PayMode: string;
                export const PaymentDate: string;
                export const SalaryComponet: string;
                export const SalaryMonth: string;
                export const SalaryPaymentId: string;
            }

            namespace Salesmen {
                export const SalesmanId: string;
                export const SalesmanName: string;
            }

            namespace StaffAdvancePayments {
                export const Amount: string;
                export const Details: string;
                export const EmployeeId: string;
                export const EmployeeIsWorking: string;
                export const EmployeeJoiningDate: string;
                export const EmployeeLeavingDate: string;
                export const EmployeeMobileNo: string;
                export const EmployeeStaffName: string;
                export const PayMode: string;
                export const PaymentDate: string;
                export const StaffAdvancePaymentId: string;
            }

            namespace StaffAdvanceReceipts {
                export const Amount: string;
                export const Details: string;
                export const EmployeeId: string;
                export const EmployeeIsWorking: string;
                export const EmployeeJoiningDate: string;
                export const EmployeeLeavingDate: string;
                export const EmployeeMobileNo: string;
                export const EmployeeStaffName: string;
                export const PayMode: string;
                export const ReceiptDate: string;
                export const StaffAdvanceReceiptId: string;
            }
        }

        namespace Process {

            namespace EndOfDays {
                export const Access: string;
                export const CashInHand: string;
                export const EndOfDayId: string;
                export const EodDate: string;
                export const FmArrow: string;
                export const Rwt: string;
                export const Shirting: string;
                export const Suiting: string;
                export const Uspa: string;
            }

            namespace MonthEnds {
                export const EntryDate: string;
                export const Month: string;
                export const MonthEndId: string;
                export const TotalAccess: string;
                export const TotalAmountAccess: string;
                export const TotalAmountFabric: string;
                export const TotalAmountOthers: string;
                export const TotalAmountRmz: string;
                export const TotalBill: string;
                export const TotalCashExpenses: string;
                export const TotalDues: string;
                export const TotalDuesOfMonth: string;
                export const TotalDuesRecovered: string;
                export const TotalExpenses: string;
                export const TotalFabric: string;
                export const TotalHomeExpenses: string;
                export const TotalInward: string;
                export const TotalInwardByAmitKumar: string;
                export const TotalInwardOthers: string;
                export const TotalOnBookExpenes: string;
                export const TotalOtherExpenses: string;
                export const TotalOtherHomeExpenses: string;
                export const TotalOtherIncome: string;
                export const TotalOthers: string;
                export const TotalPayments: string;
                export const TotalRecipts: string;
                export const TotalRmz: string;
                export const TotalSalary: string;
                export const TotalSaleIncome: string;
                export const TotalTailoringExpenses: string;
                export const TotalTailoringIncome: string;
                export const TotalTrimsAndOtherExpenses: string;
                export const Year: string;
            }
        }

        namespace Receipts {

            namespace CashReceipts {
                export const Amount: string;
                export const CashReceiptId: string;
                export const InwardDate: string;
                export const ReceiptFrom: string;
                export const SlipNo: string;
                export const TranscationModeId: string;
                export const TranscationModeTranscation: string;
            }

            namespace Receipts {
                export const Amount: string;
                export const PayMode: string;
                export const ReceiptDetails: string;
                export const ReceiptFrom: string;
                export const ReceiptId: string;
                export const RecieptDate: string;
                export const RecieptSlipNo: string;
                export const Remarks: string;
            }
        }

        namespace Sales {

            namespace DailySales {
                export const Amount: string;
                export const CashAmount: string;
                export const DailySaleId: string;
                export const InvNo: string;
                export const IsDue: string;
                export const IsManualBill: string;
                export const IsSaleReturn: string;
                export const IsTailoringBill: string;
                export const PayMode: string;
                export const Remarks: string;
                export const SaleDate: string;
                export const SalesmanId: string;
                export const SalesmanSalesmanName: string;
            }
        }

        namespace Tailors {

            namespace TailorAttendances {
                export const AttDate: string;
                export const EntryTime: string;
                export const Remarks: string;
                export const Status: string;
                export const TailorAttendanceId: string;
                export const TailoringEmployeeId: string;
                export const TailoringEmployeeIsWorking: string;
                export const TailoringEmployeeJoiningDate: string;
                export const TailoringEmployeeLeavingDate: string;
                export const TailoringEmployeeMobileNo: string;
                export const TailoringEmployeeStaffName: string;
            }

            namespace TailoringEmployees {
                export const IsWorking: string;
                export const JoiningDate: string;
                export const LeavingDate: string;
                export const MobileNo: string;
                export const StaffName: string;
                export const TailoringEmployeeId: string;
            }

            namespace TailoringSalaryPayments {
                export const Amount: string;
                export const Details: string;
                export const PayMode: string;
                export const PaymentDate: string;
                export const SalaryComponet: string;
                export const SalaryMonth: string;
                export const TailoringEmployeeId: string;
                export const TailoringEmployeeIsWorking: string;
                export const TailoringEmployeeJoiningDate: string;
                export const TailoringEmployeeLeavingDate: string;
                export const TailoringEmployeeMobileNo: string;
                export const TailoringEmployeeStaffName: string;
                export const TailoringSalaryPaymentId: string;
            }

            namespace TailoringStaffAdvancePayments {
                export const Amount: string;
                export const Details: string;
                export const PayMode: string;
                export const PaymentDate: string;
                export const TailoringEmployeeId: string;
                export const TailoringEmployeeIsWorking: string;
                export const TailoringEmployeeJoiningDate: string;
                export const TailoringEmployeeLeavingDate: string;
                export const TailoringEmployeeMobileNo: string;
                export const TailoringEmployeeStaffName: string;
                export const TailoringStaffAdvancePaymentId: string;
            }

            namespace TailoringStaffAdvanceReceipts {
                export const Amount: string;
                export const Details: string;
                export const PayMode: string;
                export const ReceiptDate: string;
                export const TailoringEmployeeId: string;
                export const TailoringEmployeeIsWorking: string;
                export const TailoringEmployeeJoiningDate: string;
                export const TailoringEmployeeLeavingDate: string;
                export const TailoringEmployeeMobileNo: string;
                export const TailoringEmployeeStaffName: string;
                export const TailoringStaffAdvanceReceiptId: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    AprajitaRetails['Texts'] = Q.proxyTexts(Texts, '', {Db:{Accounts:{CashInBanks:{CashIn:1,CashInBankId:1,CashOut:1,CibDate:1,ClosingBalance:1,OpenningBalance:1},CashInHands:{CashIn:1,CashInHandId:1,CashOut:1,CihDate:1,ClosingBalance:1,OpenningBalance:1},PurchaseTaxTypes:{CompositeRate:1,PurchaseTaxTypeId:1,TaxName:1,TaxType:1},SaleTaxTypes:{CompositeRate:1,SaleTaxTypeId:1,TaxName:1,TaxType:1},SuspenseAccounts:{ClearedDetails:1,EntryDate:1,InAmount:1,IsCleared:1,OutAmount:1,ReferanceDetails:1,ReviewBy:1,SuspenseAccountId:1},TranscationModes:{Transcation:1,TranscationModeId:1}},Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Banking:{AccountNumbers:{Account:1,AccountNumberId:1,BankBankName:1,BankId:1},BankDeposits:{AccountNumberAccount:1,AccountNumberBankId:1,AccountNumberId:1,Amount:1,BankDepositId:1,DepoDate:1,Details:1,PayMode:1,Remarks:1},BankWithdrawals:{AccountNumberAccount:1,AccountNumberBankId:1,AccountNumberId:1,Amount:1,ApprovedBy:1,BankWithdrawalId:1,ChequeNo:1,DepoDate:1,InNameOf:1,SignedBy:1},Banks:{BankId:1,BankName:1},ChequesLogs:{AccountNumber:1,Amount:1,BankName:1,ChequesDate:1,ChequesLogId:1,ClearedDate:1,DepositDate:1,IsDepositedOnAprajitaRetails:1,IsIssuedByAprajitaRetails:1,IsPdc:1,IssuedBy:1,IssuedTo:1,Remarks:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},CustomTailoring:{TalioringBookings:{BookingDate:1,BookingSlipNo:1,BundiPrice:1,BundiQty:1,CoatPrice:1,CoatQty:1,CustName:1,DeliveryDate:1,IsDelivered:1,KurtaPrice:1,KurtaQty:1,Others:1,OthersPrice:1,PantPrice:1,PantQty:1,ShirtPrice:1,ShirtQty:1,TalioringBookingId:1,TotalAmount:1,TotalQty:1,TryDate:1},TalioringDeliveries:{Amount:1,DeliveryDate:1,InvNo:1,Remarks:1,TalioringBookingBookingDate:1,TalioringBookingBookingSlipNo:1,TalioringBookingBundiPrice:1,TalioringBookingBundiQty:1,TalioringBookingCoatPrice:1,TalioringBookingCoatQty:1,TalioringBookingCustName:1,TalioringBookingDeliveryDate:1,TalioringBookingId:1,TalioringBookingIsDelivered:1,TalioringBookingKurtaPrice:1,TalioringBookingKurtaQty:1,TalioringBookingOthers:1,TalioringBookingOthersPrice:1,TalioringBookingPantPrice:1,TalioringBookingPantQty:1,TalioringBookingShirtPrice:1,TalioringBookingShirtQty:1,TalioringBookingTotalAmount:1,TalioringBookingTotalQty:1,TalioringBookingTryDate:1,TalioringDeliveryId:1}},Dues:{DueRecoverds:{AmountPaid:1,DueRecoverdId:1,DuesListAmount:1,DuesListDailySaleId:1,DuesListId:1,DuesListIsPartialRecovery:1,DuesListIsRecovered:1,DuesListRecoveryDate:1,IsPartialPayment:1,Modes:1,PaidDate:1,Remarks:1},DuesLists:{Amount:1,DailySaleAmount:1,DailySaleCashAmount:1,DailySaleId:1,DailySaleInvNo:1,DailySaleIsDue:1,DailySaleIsManualBill:1,DailySaleIsSaleReturn:1,DailySaleIsTailoringBill:1,DailySalePayMode:1,DailySaleRemarks:1,DailySaleSaleDate:1,DailySaleSalesmanId:1,DuesListId:1,IsPartialRecovery:1,IsRecovered:1,RecoveryDate:1}},Expenses:{CashPayments:{Amount:1,CashPaymentId:1,PaidTo:1,PaymentDate:1,SlipNo:1,TranscationModeId:1,TranscationModeTranscation:1},Expenses:{Amount:1,EmployeeId:1,EmployeeIsWorking:1,EmployeeJoiningDate:1,EmployeeLeavingDate:1,EmployeeMobileNo:1,EmployeeStaffName:1,ExpDate:1,ExpenseId:1,PaidTo:1,Particulars:1,PayMode:1,PaymentDetails:1,Remarks:1},Payments:{Amount:1,PayDate:1,PayMode:1,PaymentDetails:1,PaymentId:1,PaymentPartry:1,PaymentSlipNo:1,Remarks:1},PettyCashExpenses:{Amount:1,EmployeeId:1,EmployeeIsWorking:1,EmployeeJoiningDate:1,EmployeeLeavingDate:1,EmployeeMobileNo:1,EmployeeStaffName:1,ExpDate:1,PaidTo:1,Particulars:1,PettyCashExpenseId:1,Remarks:1}},PayRoll:{Attendances:{AttDate:1,AttendanceId:1,EmployeeId:1,EmployeeIsWorking:1,EmployeeJoiningDate:1,EmployeeLeavingDate:1,EmployeeMobileNo:1,EmployeeStaffName:1,EntryTime:1,Remarks:1,Status:1},CurrentSalaries:{BasicSalary:1,CloseDate:1,CurrentSalaryId:1,EffectiveDate:1,EmployeeId:1,EmployeeIsWorking:1,EmployeeJoiningDate:1,EmployeeLeavingDate:1,EmployeeMobileNo:1,EmployeeStaffName:1,IncentiveRate:1,IncentiveTarget:1,IsEffective:1,IsSundayBillable:1,LpRate:1,SundaySalary:1,WowBillRate:1,WowBillTarget:1},Employees:{EmployeeId:1,IsWorking:1,JoiningDate:1,LeavingDate:1,MobileNo:1,StaffName:1},PaySlips:{AdvanceDeducations:1,BasicSalary:1,CurrentSalaryBasicSalary:1,CurrentSalaryCloseDate:1,CurrentSalaryEffectiveDate:1,CurrentSalaryEmployeeId:1,CurrentSalaryId:1,CurrentSalaryIncentiveRate:1,CurrentSalaryIncentiveTarget:1,CurrentSalaryIsEffective:1,CurrentSalaryIsSundayBillable:1,CurrentSalaryLpRate:1,CurrentSalarySundaySalary:1,CurrentSalaryWowBillRate:1,CurrentSalaryWowBillTarget:1,EmployeeId:1,EmployeeIsWorking:1,EmployeeJoiningDate:1,EmployeeLeavingDate:1,EmployeeMobileNo:1,EmployeeStaffName:1,GrossSalary:1,LastPCsIncentive:1,LastPcsAmount:1,Month:1,NoOfDaysPresent:1,OnDate:1,OtherDeductions:1,OthersIncentive:1,PaySlipId:1,PfDeductions:1,Remarks:1,SaleIncentive:1,StandardDeductions:1,TdsDeductions:1,TotalSale:1,WowBillAmount:1,WowBillIncentive:1,Year:1},SalaryPayments:{Amount:1,Details:1,EmployeeId:1,EmployeeIsWorking:1,EmployeeJoiningDate:1,EmployeeLeavingDate:1,EmployeeMobileNo:1,EmployeeStaffName:1,PayMode:1,PaymentDate:1,SalaryComponet:1,SalaryMonth:1,SalaryPaymentId:1},Salesmen:{SalesmanId:1,SalesmanName:1},StaffAdvancePayments:{Amount:1,Details:1,EmployeeId:1,EmployeeIsWorking:1,EmployeeJoiningDate:1,EmployeeLeavingDate:1,EmployeeMobileNo:1,EmployeeStaffName:1,PayMode:1,PaymentDate:1,StaffAdvancePaymentId:1},StaffAdvanceReceipts:{Amount:1,Details:1,EmployeeId:1,EmployeeIsWorking:1,EmployeeJoiningDate:1,EmployeeLeavingDate:1,EmployeeMobileNo:1,EmployeeStaffName:1,PayMode:1,ReceiptDate:1,StaffAdvanceReceiptId:1}},Process:{EndOfDays:{Access:1,CashInHand:1,EndOfDayId:1,EodDate:1,FmArrow:1,Rwt:1,Shirting:1,Suiting:1,Uspa:1},MonthEnds:{EntryDate:1,Month:1,MonthEndId:1,TotalAccess:1,TotalAmountAccess:1,TotalAmountFabric:1,TotalAmountOthers:1,TotalAmountRmz:1,TotalBill:1,TotalCashExpenses:1,TotalDues:1,TotalDuesOfMonth:1,TotalDuesRecovered:1,TotalExpenses:1,TotalFabric:1,TotalHomeExpenses:1,TotalInward:1,TotalInwardByAmitKumar:1,TotalInwardOthers:1,TotalOnBookExpenes:1,TotalOtherExpenses:1,TotalOtherHomeExpenses:1,TotalOtherIncome:1,TotalOthers:1,TotalPayments:1,TotalRecipts:1,TotalRmz:1,TotalSalary:1,TotalSaleIncome:1,TotalTailoringExpenses:1,TotalTailoringIncome:1,TotalTrimsAndOtherExpenses:1,Year:1}},Receipts:{CashReceipts:{Amount:1,CashReceiptId:1,InwardDate:1,ReceiptFrom:1,SlipNo:1,TranscationModeId:1,TranscationModeTranscation:1},Receipts:{Amount:1,PayMode:1,ReceiptDetails:1,ReceiptFrom:1,ReceiptId:1,RecieptDate:1,RecieptSlipNo:1,Remarks:1}},Sales:{DailySales:{Amount:1,CashAmount:1,DailySaleId:1,InvNo:1,IsDue:1,IsManualBill:1,IsSaleReturn:1,IsTailoringBill:1,PayMode:1,Remarks:1,SaleDate:1,SalesmanId:1,SalesmanSalesmanName:1}},Tailors:{TailorAttendances:{AttDate:1,EntryTime:1,Remarks:1,Status:1,TailorAttendanceId:1,TailoringEmployeeId:1,TailoringEmployeeIsWorking:1,TailoringEmployeeJoiningDate:1,TailoringEmployeeLeavingDate:1,TailoringEmployeeMobileNo:1,TailoringEmployeeStaffName:1},TailoringEmployees:{IsWorking:1,JoiningDate:1,LeavingDate:1,MobileNo:1,StaffName:1,TailoringEmployeeId:1},TailoringSalaryPayments:{Amount:1,Details:1,PayMode:1,PaymentDate:1,SalaryComponet:1,SalaryMonth:1,TailoringEmployeeId:1,TailoringEmployeeIsWorking:1,TailoringEmployeeJoiningDate:1,TailoringEmployeeLeavingDate:1,TailoringEmployeeMobileNo:1,TailoringEmployeeStaffName:1,TailoringSalaryPaymentId:1},TailoringStaffAdvancePayments:{Amount:1,Details:1,PayMode:1,PaymentDate:1,TailoringEmployeeId:1,TailoringEmployeeIsWorking:1,TailoringEmployeeJoiningDate:1,TailoringEmployeeLeavingDate:1,TailoringEmployeeMobileNo:1,TailoringEmployeeStaffName:1,TailoringStaffAdvancePaymentId:1},TailoringStaffAdvanceReceipts:{Amount:1,Details:1,PayMode:1,ReceiptDate:1,TailoringEmployeeId:1,TailoringEmployeeIsWorking:1,TailoringEmployeeJoiningDate:1,TailoringEmployeeLeavingDate:1,TailoringEmployeeMobileNo:1,TailoringEmployeeStaffName:1,TailoringStaffAdvanceReceiptId:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
