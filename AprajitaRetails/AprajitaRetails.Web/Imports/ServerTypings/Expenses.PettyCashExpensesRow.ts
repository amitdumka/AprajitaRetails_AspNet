namespace AprajitaRetails.Expenses {
    export interface PettyCashExpensesRow {
        PettyCashExpenseId?: number;
        ExpDate?: string;
        Particulars?: string;
        Amount?: number;
        EmployeeId?: number;
        PaidTo?: string;
        Remarks?: string;
        EmployeeStaffName?: string;
        EmployeeMobileNo?: string;
        EmployeeJoiningDate?: string;
        EmployeeLeavingDate?: string;
        EmployeeIsWorking?: boolean;
    }

    export namespace PettyCashExpensesRow {
        export const idProperty = 'PettyCashExpenseId';
        export const nameProperty = 'Particulars';
        export const localTextPrefix = 'Expenses.PettyCashExpenses';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            PettyCashExpenseId = "PettyCashExpenseId",
            ExpDate = "ExpDate",
            Particulars = "Particulars",
            Amount = "Amount",
            EmployeeId = "EmployeeId",
            PaidTo = "PaidTo",
            Remarks = "Remarks",
            EmployeeStaffName = "EmployeeStaffName",
            EmployeeMobileNo = "EmployeeMobileNo",
            EmployeeJoiningDate = "EmployeeJoiningDate",
            EmployeeLeavingDate = "EmployeeLeavingDate",
            EmployeeIsWorking = "EmployeeIsWorking"
        }
    }
}
