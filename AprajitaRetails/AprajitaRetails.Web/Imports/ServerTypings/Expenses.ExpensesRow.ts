namespace AprajitaRetails.Expenses {
    export interface ExpensesRow {
        ExpenseId?: number;
        ExpDate?: string;
        Particulars?: string;
        Amount?: number;
        PayMode?: number;
        PaymentDetails?: string;
        EmployeeId?: number;
        PaidTo?: string;
        Remarks?: string;
        EmployeeStaffName?: string;
        EmployeeMobileNo?: string;
        EmployeeJoiningDate?: string;
        EmployeeLeavingDate?: string;
        EmployeeIsWorking?: boolean;
    }

    export namespace ExpensesRow {
        export const idProperty = 'ExpenseId';
        export const nameProperty = 'Particulars';
        export const localTextPrefix = 'Expenses.Expenses';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ExpenseId = "ExpenseId",
            ExpDate = "ExpDate",
            Particulars = "Particulars",
            Amount = "Amount",
            PayMode = "PayMode",
            PaymentDetails = "PaymentDetails",
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
