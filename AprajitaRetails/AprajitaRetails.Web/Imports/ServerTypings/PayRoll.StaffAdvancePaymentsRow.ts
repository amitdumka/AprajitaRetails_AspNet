namespace AprajitaRetails.PayRoll {
    export interface StaffAdvancePaymentsRow {
        StaffAdvancePaymentId?: number;
        EmployeeId?: number;
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

    export namespace StaffAdvancePaymentsRow {
        export const idProperty = 'StaffAdvancePaymentId';
        export const nameProperty = 'Details';
        export const localTextPrefix = 'PayRoll.StaffAdvancePayments';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            StaffAdvancePaymentId = "StaffAdvancePaymentId",
            EmployeeId = "EmployeeId",
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
