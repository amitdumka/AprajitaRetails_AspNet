namespace AprajitaRetails.Purchases {
    export interface ProductPurchasesRow {
        ProductPurchaseId?: number;
        InWardNo?: string;
        InWardDate?: string;
        PurchaseDate?: string;
        InvoiceNo?: string;
        TotalQty?: number;
        TotalBasicAmount?: number;
        ShippingCost?: number;
        TotalTax?: number;
        TotalAmount?: number;
        Remarks?: string;
        SupplierId?: number;
        IsPaid?: boolean;
        SupplierSuppilerName?: string;
        SupplierWarehouse?: string;
    }

    export namespace ProductPurchasesRow {
        export const idProperty = 'ProductPurchaseId';
        export const nameProperty = 'InWardNo';
        export const localTextPrefix = 'Purchases.ProductPurchases';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ProductPurchaseId = "ProductPurchaseId",
            InWardNo = "InWardNo",
            InWardDate = "InWardDate",
            PurchaseDate = "PurchaseDate",
            InvoiceNo = "InvoiceNo",
            TotalQty = "TotalQty",
            TotalBasicAmount = "TotalBasicAmount",
            ShippingCost = "ShippingCost",
            TotalTax = "TotalTax",
            TotalAmount = "TotalAmount",
            Remarks = "Remarks",
            SupplierId = "SupplierId",
            IsPaid = "IsPaid",
            SupplierSuppilerName = "SupplierSuppilerName",
            SupplierWarehouse = "SupplierWarehouse"
        }
    }
}
