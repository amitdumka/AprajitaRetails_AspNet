namespace AprajitaRetails.Voyager {
    export interface ImportPurchasesRow {
        ImportPurchaseId?: number;
        GrnNo?: string;
        GrnDate?: string;
        InvoiceNo?: string;
        InvoiceDate?: string;
        SupplierName?: string;
        Barcode?: string;
        ProductName?: string;
        StyleCode?: string;
        ItemDesc?: string;
        Quantity?: number;
        Mrp?: number;
        MrpValue?: number;
        Cost?: number;
        CostValue?: number;
        TaxAmt?: number;
        IsVatBill?: boolean;
        IsLocal?: boolean;
        IsDataConsumed?: boolean;
        ImportTime?: string;
    }

    export namespace ImportPurchasesRow {
        export const idProperty = 'ImportPurchaseId';
        export const nameProperty = 'GrnNo';
        export const localTextPrefix = 'Voyager.ImportPurchases';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ImportPurchaseId = "ImportPurchaseId",
            GrnNo = "GrnNo",
            GrnDate = "GrnDate",
            InvoiceNo = "InvoiceNo",
            InvoiceDate = "InvoiceDate",
            SupplierName = "SupplierName",
            Barcode = "Barcode",
            ProductName = "ProductName",
            StyleCode = "StyleCode",
            ItemDesc = "ItemDesc",
            Quantity = "Quantity",
            Mrp = "Mrp",
            MrpValue = "MrpValue",
            Cost = "Cost",
            CostValue = "CostValue",
            TaxAmt = "TaxAmt",
            IsVatBill = "IsVatBill",
            IsLocal = "IsLocal",
            IsDataConsumed = "IsDataConsumed",
            ImportTime = "ImportTime"
        }
    }
}
