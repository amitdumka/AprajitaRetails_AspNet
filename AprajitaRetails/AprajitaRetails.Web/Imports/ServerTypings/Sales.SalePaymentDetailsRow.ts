namespace AprajitaRetails.Sales {
    export interface SalePaymentDetailsRow {
        SalePaymentDetailId?: number;
        PayMode?: number;
        CashAmount?: number;
        CardAmount?: number;
        MixAmount?: number;
        SalePaymentDetailCustomerId?: number;
        SalePaymentDetailOnDate?: string;
        SalePaymentDetailInvoiceNo?: string;
        SalePaymentDetailTotalItems?: number;
        SalePaymentDetailTotalQty?: number;
        SalePaymentDetailTotalBillAmount?: number;
        SalePaymentDetailTotalDiscountAmount?: number;
        SalePaymentDetailRoundOffAmount?: number;
        SalePaymentDetailTotalTaxAmount?: number;
    }

    export namespace SalePaymentDetailsRow {
        export const idProperty = 'SalePaymentDetailId';
        export const localTextPrefix = 'Sales.SalePaymentDetails';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SalePaymentDetailId = "SalePaymentDetailId",
            PayMode = "PayMode",
            CashAmount = "CashAmount",
            CardAmount = "CardAmount",
            MixAmount = "MixAmount",
            SalePaymentDetailCustomerId = "SalePaymentDetailCustomerId",
            SalePaymentDetailOnDate = "SalePaymentDetailOnDate",
            SalePaymentDetailInvoiceNo = "SalePaymentDetailInvoiceNo",
            SalePaymentDetailTotalItems = "SalePaymentDetailTotalItems",
            SalePaymentDetailTotalQty = "SalePaymentDetailTotalQty",
            SalePaymentDetailTotalBillAmount = "SalePaymentDetailTotalBillAmount",
            SalePaymentDetailTotalDiscountAmount = "SalePaymentDetailTotalDiscountAmount",
            SalePaymentDetailRoundOffAmount = "SalePaymentDetailRoundOffAmount",
            SalePaymentDetailTotalTaxAmount = "SalePaymentDetailTotalTaxAmount"
        }
    }
}
