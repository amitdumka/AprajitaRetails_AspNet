namespace AprajitaRetails.Tailors {
    export interface TailoringSalaryPaymentsRow {
        TailoringSalaryPaymentId?: number;
        TailoringEmployeeId?: number;
        SalaryMonth?: string;
        SalaryComponet?: number;
        PaymentDate?: string;
        Amount?: number;
        PayMode?: number;
        Details?: string;
        TailoringEmployeeStaffName?: string;
        TailoringEmployeeMobileNo?: string;
        TailoringEmployeeJoiningDate?: string;
        TailoringEmployeeLeavingDate?: string;
        TailoringEmployeeIsWorking?: boolean;
    }

    export namespace TailoringSalaryPaymentsRow {
        export const idProperty = 'TailoringSalaryPaymentId';
        export const nameProperty = 'SalaryMonth';
        export const localTextPrefix = 'Tailors.TailoringSalaryPayments';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            TailoringSalaryPaymentId = "TailoringSalaryPaymentId",
            TailoringEmployeeId = "TailoringEmployeeId",
            SalaryMonth = "SalaryMonth",
            SalaryComponet = "SalaryComponet",
            PaymentDate = "PaymentDate",
            Amount = "Amount",
            PayMode = "PayMode",
            Details = "Details",
            TailoringEmployeeStaffName = "TailoringEmployeeStaffName",
            TailoringEmployeeMobileNo = "TailoringEmployeeMobileNo",
            TailoringEmployeeJoiningDate = "TailoringEmployeeJoiningDate",
            TailoringEmployeeLeavingDate = "TailoringEmployeeLeavingDate",
            TailoringEmployeeIsWorking = "TailoringEmployeeIsWorking"
        }
    }
}
