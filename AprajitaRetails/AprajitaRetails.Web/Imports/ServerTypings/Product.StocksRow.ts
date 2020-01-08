namespace AprajitaRetails.Product {
    export interface StocksRow {
        StockId?: number;
        ProductItemId?: number;
        Quantity?: number;
        SaleQty?: number;
        PurchaseQty?: number;
        Units?: number;
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
    }

    export namespace StocksRow {
        export const idProperty = 'StockId';
        export const localTextPrefix = 'Product.Stocks';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            StockId = "StockId",
            ProductItemId = "ProductItemId",
            Quantity = "Quantity",
            SaleQty = "SaleQty",
            PurchaseQty = "PurchaseQty",
            Units = "Units",
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
            ProductItemProductTypeCategoryId = "ProductItemProductTypeCategoryId"
        }
    }
}
