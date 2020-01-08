namespace AprajitaRetails.Sales {
    export interface SaleInvoicesRow {
        SaleInvoiceId?: number;
        CustomerId?: number;
        OnDate?: string;
        InvoiceNo?: string;
        TotalItems?: number;
        TotalQty?: number;
        TotalBillAmount?: number;
        TotalDiscountAmount?: number;
        RoundOffAmount?: number;
        TotalTaxAmount?: number;
    }

    export namespace SaleInvoicesRow {
        export const idProperty = 'SaleInvoiceId';
        export const nameProperty = 'InvoiceNo';
        export const localTextPrefix = 'Sales.SaleInvoices';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SaleInvoiceId = "SaleInvoiceId",
            CustomerId = "CustomerId",
            OnDate = "OnDate",
            InvoiceNo = "InvoiceNo",
            TotalItems = "TotalItems",
            TotalQty = "TotalQty",
            TotalBillAmount = "TotalBillAmount",
            TotalDiscountAmount = "TotalDiscountAmount",
            RoundOffAmount = "RoundOffAmount",
            TotalTaxAmount = "TotalTaxAmount"
        }
    }
}
