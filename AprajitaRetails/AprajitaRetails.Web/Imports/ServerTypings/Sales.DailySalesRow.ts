namespace AprajitaRetails.Sales {
    export interface DailySalesRow {
        DailySaleId?: number;
        SaleDate?: string;
        InvNo?: string;
        Amount?: number;
        PayMode?: number;
        CashAmount?: number;
        SalesmanId?: number;
        IsDue?: boolean;
        IsManualBill?: boolean;
        IsTailoringBill?: boolean;
        Remarks?: string;
        IsSaleReturn?: boolean;
        SalesmanSalesmanName?: string;
    }

    export namespace DailySalesRow {
        export const idProperty = 'DailySaleId';
        export const nameProperty = 'InvNo';
        export const localTextPrefix = 'Sales.DailySales';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            DailySaleId = "DailySaleId",
            SaleDate = "SaleDate",
            InvNo = "InvNo",
            Amount = "Amount",
            PayMode = "PayMode",
            CashAmount = "CashAmount",
            SalesmanId = "SalesmanId",
            IsDue = "IsDue",
            IsManualBill = "IsManualBill",
            IsTailoringBill = "IsTailoringBill",
            Remarks = "Remarks",
            IsSaleReturn = "IsSaleReturn",
            SalesmanSalesmanName = "SalesmanSalesmanName"
        }
    }
}
