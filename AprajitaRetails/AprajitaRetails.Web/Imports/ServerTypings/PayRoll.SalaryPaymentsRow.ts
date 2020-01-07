namespace AprajitaRetails.PayRoll {
    export interface SalaryPaymentsRow {
        SalaryPaymentId?: number;
        EmployeeId?: number;
        SalaryMonth?: string;
        SalaryComponet?: number;
        PaymentDate?: string;
        Amount?: number;
        PayMode?: number;
        Details?: string;
        EmployeeStaffName?: string;
        EmployeeMobileNo?: string;
        EmployeeJoiningDate?: string;
        EmployeeLeavingDate?: string;
        EmployeeIsWorking?: boolean;
    }

    export namespace SalaryPaymentsRow {
        export const idProperty = 'SalaryPaymentId';
        export const nameProperty = 'SalaryMonth';
        export const localTextPrefix = 'PayRoll.SalaryPayments';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SalaryPaymentId = "SalaryPaymentId",
            EmployeeId = "EmployeeId",
            SalaryMonth = "SalaryMonth",
            SalaryComponet = "SalaryComponet",
            PaymentDate = "PaymentDate",
            Amount = "Amount",
            PayMode = "PayMode",
            Details = "Details",
            EmployeeStaffName = "EmployeeStaffName",
            EmployeeMobileNo = "EmployeeMobileNo",
            EmployeeJoiningDate = "EmployeeJoiningDate",
            EmployeeLeavingDate = "EmployeeLeavingDate",
            EmployeeIsWorking = "EmployeeIsWorking"
        }
    }
}
