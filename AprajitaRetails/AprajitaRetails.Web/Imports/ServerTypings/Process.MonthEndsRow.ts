namespace AprajitaRetails.Process {
    export interface MonthEndsRow {
        MonthEndId?: number;
        EntryDate?: string;
        Month?: number;
        Year?: number;
        TotalBill?: number;
        TotalFabric?: number;
        TotalRmz?: number;
        TotalAccess?: number;
        TotalOthers?: number;
        TotalAmountFabric?: number;
        TotalAmountRmz?: number;
        TotalAmountAccess?: number;
        TotalAmountOthers?: number;
        TotalSaleIncome?: number;
        TotalTailoringIncome?: number;
        TotalOtherIncome?: number;
        TotalInward?: number;
        TotalInwardByAmitKumar?: number;
        TotalInwardOthers?: number;
        TotalDues?: number;
        TotalDuesOfMonth?: number;
        TotalDuesRecovered?: number;
        TotalExpenses?: number;
        TotalOnBookExpenes?: number;
        TotalCashExpenses?: number;
        TotalSalary?: number;
        TotalTailoringExpenses?: number;
        TotalTrimsAndOtherExpenses?: number;
        TotalHomeExpenses?: number;
        TotalOtherHomeExpenses?: number;
        TotalOtherExpenses?: number;
        TotalPayments?: number;
        TotalRecipts?: number;
    }

    export namespace MonthEndsRow {
        export const idProperty = 'MonthEndId';
        export const localTextPrefix = 'Process.MonthEnds';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            MonthEndId = "MonthEndId",
            EntryDate = "EntryDate",
            Month = "Month",
            Year = "Year",
            TotalBill = "TotalBill",
            TotalFabric = "TotalFabric",
            TotalRmz = "TotalRmz",
            TotalAccess = "TotalAccess",
            TotalOthers = "TotalOthers",
            TotalAmountFabric = "TotalAmountFabric",
            TotalAmountRmz = "TotalAmountRmz",
            TotalAmountAccess = "TotalAmountAccess",
            TotalAmountOthers = "TotalAmountOthers",
            TotalSaleIncome = "TotalSaleIncome",
            TotalTailoringIncome = "TotalTailoringIncome",
            TotalOtherIncome = "TotalOtherIncome",
            TotalInward = "TotalInward",
            TotalInwardByAmitKumar = "TotalInwardByAmitKumar",
            TotalInwardOthers = "TotalInwardOthers",
            TotalDues = "TotalDues",
            TotalDuesOfMonth = "TotalDuesOfMonth",
            TotalDuesRecovered = "TotalDuesRecovered",
            TotalExpenses = "TotalExpenses",
            TotalOnBookExpenes = "TotalOnBookExpenes",
            TotalCashExpenses = "TotalCashExpenses",
            TotalSalary = "TotalSalary",
            TotalTailoringExpenses = "TotalTailoringExpenses",
            TotalTrimsAndOtherExpenses = "TotalTrimsAndOtherExpenses",
            TotalHomeExpenses = "TotalHomeExpenses",
            TotalOtherHomeExpenses = "TotalOtherHomeExpenses",
            TotalOtherExpenses = "TotalOtherExpenses",
            TotalPayments = "TotalPayments",
            TotalRecipts = "TotalRecipts"
        }
    }
}
