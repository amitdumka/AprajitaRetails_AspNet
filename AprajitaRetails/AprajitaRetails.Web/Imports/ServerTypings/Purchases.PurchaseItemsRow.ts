namespace AprajitaRetails.Purchases {
    export interface PurchaseItemsRow {
        PurchaseItemId?: number;
        ProductPurchaseId?: number;
        ProductItemId?: number;
        Barcode?: string;
        Qty?: number;
        Unit?: number;
        Cost?: number;
        TaxAmout?: number;
        PurchaseTaxTypeId?: number;
        CostValue?: number;
        ProductPurchaseInWardNo?: string;
        ProductPurchaseInWardDate?: string;
        ProductPurchasePurchaseDate?: string;
        ProductPurchaseInvoiceNo?: string;
        ProductPurchaseTotalQty?: number;
        ProductPurchaseTotalBasicAmount?: number;
        ProductPurchaseShippingCost?: number;
        ProductPurchaseTotalTax?: number;
        ProductPurchaseTotalAmount?: number;
        ProductPurchaseRemarks?: string;
        ProductPurchaseSupplierId?: number;
        ProductPurchaseIsPaid?: boolean;
        ProductItemBarcode?: string;
        ProductItemBrandId?: number;
        ProductItemStyleCode?: string;
        ProductItemProductName?: string;
        ProductItemItemDesc?: string;
        ProductItemCategorys?: number;
        ProductItemMrp?: number;
        ProductItemTaxRate?: number;
        ProductItemCost?: number;
        ProductItemSize?: number;
        ProductItemUnits?: number;
        ProductItemMainCategoryCategoryId?: number;
        ProductItemProductCategoryCategoryId?: number;
        ProductItemProductTypeCategoryId?: number;
        PurchaseTaxTypeTaxName?: string;
        PurchaseTaxTypeTaxType?: number;
        PurchaseTaxTypeCompositeRate?: number;
    }

    export namespace PurchaseItemsRow {
        export const idProperty = 'PurchaseItemId';
        export const nameProperty = 'Barcode';
        export const localTextPrefix = 'Purchases.PurchaseItems';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            PurchaseItemId = "PurchaseItemId",
            ProductPurchaseId = "ProductPurchaseId",
            ProductItemId = "ProductItemId",
            Barcode = "Barcode",
            Qty = "Qty",
            Unit = "Unit",
            Cost = "Cost",
            TaxAmout = "TaxAmout",
            PurchaseTaxTypeId = "PurchaseTaxTypeId",
            CostValue = "CostValue",
            ProductPurchaseInWardNo = "ProductPurchaseInWardNo",
            ProductPurchaseInWardDate = "ProductPurchaseInWardDate",
            ProductPurchasePurchaseDate = "ProductPurchasePurchaseDate",
            ProductPurchaseInvoiceNo = "ProductPurchaseInvoiceNo",
            ProductPurchaseTotalQty = "ProductPurchaseTotalQty",
            ProductPurchaseTotalBasicAmount = "ProductPurchaseTotalBasicAmount",
            ProductPurchaseShippingCost = "ProductPurchaseShippingCost",
            ProductPurchaseTotalTax = "ProductPurchaseTotalTax",
            ProductPurchaseTotalAmount = "ProductPurchaseTotalAmount",
            ProductPurchaseRemarks = "ProductPurchaseRemarks",
            ProductPurchaseSupplierId = "ProductPurchaseSupplierId",
            ProductPurchaseIsPaid = "ProductPurchaseIsPaid",
            ProductItemBarcode = "ProductItemBarcode",
            ProductItemBrandId = "ProductItemBrandId",
            ProductItemStyleCode = "ProductItemStyleCode",
            ProductItemProductName = "ProductItemProductName",
            ProductItemItemDesc = "ProductItemItemDesc",
            ProductItemCategorys = "ProductItemCategorys",
            ProductItemMrp = "ProductItemMrp",
            ProductItemTaxRate = "ProductItemTaxRate",
            ProductItemCost = "ProductItemCost",
            ProductItemSize = "ProductItemSize",
            ProductItemUnits = "ProductItemUnits",
            ProductItemMainCategoryCategoryId = "ProductItemMainCategoryCategoryId",
            ProductItemProductCategoryCategoryId = "ProductItemProductCategoryCategoryId",
            ProductItemProductTypeCategoryId = "ProductItemProductTypeCategoryId",
            PurchaseTaxTypeTaxName = "PurchaseTaxTypeTaxName",
            PurchaseTaxTypeTaxType = "PurchaseTaxTypeTaxType",
            PurchaseTaxTypeCompositeRate = "PurchaseTaxTypeCompositeRate"
        }
    }
}
