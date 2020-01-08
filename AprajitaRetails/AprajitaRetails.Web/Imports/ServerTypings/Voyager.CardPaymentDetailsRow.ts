namespace AprajitaRetails.Voyager {
    export interface CardPaymentDetailsRow {
        CardPaymentDetailId?: number;
        SaleInvoiceId?: number;
        CardType?: number;
        Amount?: number;
        AuthCode?: number;
        LastDigit?: number;
        CardPaymentDetailPayMode?: number;
        CardPaymentDetailCashAmount?: number;
        CardPaymentDetailCardAmount?: number;
        CardPaymentDetailMixAmount?: number;
    }

    export namespace CardPaymentDetailsRow {
        export const idProperty = 'CardPaymentDetailId';
        export const localTextPrefix = 'Voyager.CardPaymentDetails';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CardPaymentDetailId = "CardPaymentDetailId",
            SaleInvoiceId = "SaleInvoiceId",
            CardType = "CardType",
            Amount = "Amount",
            AuthCode = "AuthCode",
            LastDigit = "LastDigit",
            CardPaymentDetailPayMode = "CardPaymentDetailPayMode",
            CardPaymentDetailCashAmount = "CardPaymentDetailCashAmount",
            CardPaymentDetailCardAmount = "CardPaymentDetailCardAmount",
            CardPaymentDetailMixAmount = "CardPaymentDetailMixAmount"
        }
    }
}
