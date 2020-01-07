namespace AprajitaRetails.Receipts {
    export interface CashReceiptsRow {
        CashReceiptId?: number;
        InwardDate?: string;
        TranscationModeId?: number;
        ReceiptFrom?: string;
        Amount?: number;
        SlipNo?: string;
        TranscationModeTranscation?: string;
    }

    export namespace CashReceiptsRow {
        export const idProperty = 'CashReceiptId';
        export const nameProperty = 'ReceiptFrom';
        export const localTextPrefix = 'Receipts.CashReceipts';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CashReceiptId = "CashReceiptId",
            InwardDate = "InwardDate",
            TranscationModeId = "TranscationModeId",
            ReceiptFrom = "ReceiptFrom",
            Amount = "Amount",
            SlipNo = "SlipNo",
            TranscationModeTranscation = "TranscationModeTranscation"
        }
    }
}
