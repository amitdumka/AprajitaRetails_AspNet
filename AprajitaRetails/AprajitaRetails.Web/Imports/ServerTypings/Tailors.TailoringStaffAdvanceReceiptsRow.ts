namespace AprajitaRetails.Tailors {
    export interface TailoringStaffAdvanceReceiptsRow {
        TailoringStaffAdvanceReceiptId?: number;
        TailoringEmployeeId?: number;
        ReceiptDate?: string;
        Amount?: number;
        PayMode?: number;
        Details?: string;
        TailoringEmployeeStaffName?: string;
        TailoringEmployeeMobileNo?: string;
        TailoringEmployeeJoiningDate?: string;
        TailoringEmployeeLeavingDate?: string;
        TailoringEmployeeIsWorking?: boolean;
    }

    export namespace TailoringStaffAdvanceReceiptsRow {
        export const idProperty = 'TailoringStaffAdvanceReceiptId';
        export const nameProperty = 'Details';
        export const localTextPrefix = 'Tailors.TailoringStaffAdvanceReceipts';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            TailoringStaffAdvanceReceiptId = "TailoringStaffAdvanceReceiptId",
            TailoringEmployeeId = "TailoringEmployeeId",
            ReceiptDate = "ReceiptDate",
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
