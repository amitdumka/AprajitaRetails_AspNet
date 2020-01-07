namespace AprajitaRetails.Expenses {
    export interface PaymentsRow {
        PaymentId?: number;
        PayDate?: string;
        PaymentPartry?: string;
        PayMode?: number;
        PaymentDetails?: string;
        Amount?: number;
        PaymentSlipNo?: string;
        Remarks?: string;
    }

    export namespace PaymentsRow {
        export const idProperty = 'PaymentId';
        export const nameProperty = 'PaymentPartry';
        export const localTextPrefix = 'Expenses.Payments';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            PaymentId = "PaymentId",
            PayDate = "PayDate",
            PaymentPartry = "PaymentPartry",
            PayMode = "PayMode",
            PaymentDetails = "PaymentDetails",
            Amount = "Amount",
            PaymentSlipNo = "PaymentSlipNo",
            Remarks = "Remarks"
        }
    }
}
