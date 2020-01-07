namespace AprajitaRetails.Tailors {
    export interface TailoringStaffAdvancePaymentsRow {
        TailoringStaffAdvancePaymentId?: number;
        TailoringEmployeeId?: number;
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

    export namespace TailoringStaffAdvancePaymentsRow {
        export const idProperty = 'TailoringStaffAdvancePaymentId';
        export const nameProperty = 'Details';
        export const localTextPrefix = 'Tailors.TailoringStaffAdvancePayments';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            TailoringStaffAdvancePaymentId = "TailoringStaffAdvancePaymentId",
            TailoringEmployeeId = "TailoringEmployeeId",
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
