namespace AprajitaRetails.PayRoll {
    export interface StaffAdvanceReceiptsRow {
        StaffAdvanceReceiptId?: number;
        EmployeeId?: number;
        ReceiptDate?: string;
        Amount?: number;
        PayMode?: number;
        Details?: string;
        EmployeeStaffName?: string;
        EmployeeMobileNo?: string;
        EmployeeJoiningDate?: string;
        EmployeeLeavingDate?: string;
        EmployeeIsWorking?: boolean;
    }

    export namespace StaffAdvanceReceiptsRow {
        export const idProperty = 'StaffAdvanceReceiptId';
        export const nameProperty = 'Details';
        export const localTextPrefix = 'PayRoll.StaffAdvanceReceipts';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            StaffAdvanceReceiptId = "StaffAdvanceReceiptId",
            EmployeeId = "EmployeeId",
            ReceiptDate = "ReceiptDate",
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
