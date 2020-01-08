namespace AprajitaRetails.Sales {
    export interface SaleItemsRow {
        SaleItemId?: number;
        SaleInvoiceId?: number;
        ProductItemId?: number;
        BarCode?: string;
        Qty?: number;
        Units?: number;
        Mrp?: number;
        BasicAmount?: number;
        Discount?: number;
        TaxAmount?: number;
        SaleTaxTypeId?: number;
        BillAmount?: number;
        SalesmanId?: number;
        SaleInvoiceCustomerId?: number;
        SaleInvoiceOnDate?: string;
        SaleInvoiceInvoiceNo?: string;
        SaleInvoiceTotalItems?: number;
        SaleInvoiceTotalQty?: number;
        SaleInvoiceTotalBillAmount?: number;
        SaleInvoiceTotalDiscountAmount?: number;
        SaleInvoiceRoundOffAmount?: number;
        SaleInvoiceTotalTaxAmount?: number;
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
        SaleTaxTypeTaxName?: string;
        SaleTaxTypeTaxType?: number;
        SaleTaxTypeCompositeRate?: number;
        SalesmanSalesmanName?: string;
    }

    export namespace SaleItemsRow {
        export const idProperty = 'SaleItemId';
        export const nameProperty = 'BarCode';
        export const localTextPrefix = 'Sales.SaleItems';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SaleItemId = "SaleItemId",
            SaleInvoiceId = "SaleInvoiceId",
            ProductItemId = "ProductItemId",
            BarCode = "BarCode",
            Qty = "Qty",
            Units = "Units",
            Mrp = "Mrp",
            BasicAmount = "BasicAmount",
            Discount = "Discount",
            TaxAmount = "TaxAmount",
            SaleTaxTypeId = "SaleTaxTypeId",
            BillAmount = "BillAmount",
            SalesmanId = "SalesmanId",
            SaleInvoiceCustomerId = "SaleInvoiceCustomerId",
            SaleInvoiceOnDate = "SaleInvoiceOnDate",
            SaleInvoiceInvoiceNo = "SaleInvoiceInvoiceNo",
            SaleInvoiceTotalItems = "SaleInvoiceTotalItems",
            SaleInvoiceTotalQty = "SaleInvoiceTotalQty",
            SaleInvoiceTotalBillAmount = "SaleInvoiceTotalBillAmount",
            SaleInvoiceTotalDiscountAmount = "SaleInvoiceTotalDiscountAmount",
            SaleInvoiceRoundOffAmount = "SaleInvoiceRoundOffAmount",
            SaleInvoiceTotalTaxAmount = "SaleInvoiceTotalTaxAmount",
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
            SaleTaxTypeTaxName = "SaleTaxTypeTaxName",
            SaleTaxTypeTaxType = "SaleTaxTypeTaxType",
            SaleTaxTypeCompositeRate = "SaleTaxTypeCompositeRate",
            SalesmanSalesmanName = "SalesmanSalesmanName"
        }
    }
}
