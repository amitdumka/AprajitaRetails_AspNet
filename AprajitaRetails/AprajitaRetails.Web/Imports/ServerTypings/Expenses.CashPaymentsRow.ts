namespace AprajitaRetails.Expenses {
    export interface CashPaymentsRow {
        CashPaymentId?: number;
        PaymentDate?: string;
        TranscationModeId?: number;
        PaidTo?: string;
        Amount?: number;
        SlipNo?: string;
        TranscationModeTranscation?: string;
    }

    export namespace CashPaymentsRow {
        export const idProperty = 'CashPaymentId';
        export const nameProperty = 'PaidTo';
        export const localTextPrefix = 'Expenses.CashPayments';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CashPaymentId = "CashPaymentId",
            PaymentDate = "PaymentDate",
            TranscationModeId = "TranscationModeId",
            PaidTo = "PaidTo",
            Amount = "Amount",
            SlipNo = "SlipNo",
            TranscationModeTranscation = "TranscationModeTranscation"
        }
    }
}
