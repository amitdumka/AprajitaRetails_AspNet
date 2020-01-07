namespace AprajitaRetails.Receipts {
    export interface ReceiptsRow {
        ReceiptId?: number;
        RecieptDate?: string;
        ReceiptFrom?: string;
        PayMode?: number;
        ReceiptDetails?: string;
        Amount?: number;
        RecieptSlipNo?: string;
        Remarks?: string;
    }

    export namespace ReceiptsRow {
        export const idProperty = 'ReceiptId';
        export const nameProperty = 'ReceiptFrom';
        export const localTextPrefix = 'Receipts.Receipts';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ReceiptId = "ReceiptId",
            RecieptDate = "RecieptDate",
            ReceiptFrom = "ReceiptFrom",
            PayMode = "PayMode",
            ReceiptDetails = "ReceiptDetails",
            Amount = "Amount",
            RecieptSlipNo = "RecieptSlipNo",
            Remarks = "Remarks"
        }
    }
}
