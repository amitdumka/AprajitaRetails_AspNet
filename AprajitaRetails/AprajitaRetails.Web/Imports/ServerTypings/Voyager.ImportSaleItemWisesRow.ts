namespace AprajitaRetails.Voyager {
    export interface ImportSaleItemWisesRow {
        ImportSaleItemWiseId?: number;
        InvoiceDate?: string;
        InvoiceNo?: string;
        InvoiceType?: string;
        BrandName?: string;
        ProductName?: string;
        ItemDesc?: string;
        HsnCode?: string;
        Barcode?: string;
        StyleCode?: string;
        Quantity?: number;
        Mrp?: number;
        Discount?: number;
        BasicRate?: number;
        Tax?: number;
        Sgst?: number;
        Cgst?: number;
        LineTotal?: number;
        RoundOff?: number;
        BillAmnt?: number;
        PaymentType?: string;
        Saleman?: string;
        IsDataConsumed?: boolean;
        ImportTime?: string;
    }

    export namespace ImportSaleItemWisesRow {
        export const idProperty = 'ImportSaleItemWiseId';
        export const nameProperty = 'InvoiceNo';
        export const localTextPrefix = 'Voyager.ImportSaleItemWises';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ImportSaleItemWiseId = "ImportSaleItemWiseId",
            InvoiceDate = "InvoiceDate",
            InvoiceNo = "InvoiceNo",
            InvoiceType = "InvoiceType",
            BrandName = "BrandName",
            ProductName = "ProductName",
            ItemDesc = "ItemDesc",
            HsnCode = "HsnCode",
            Barcode = "Barcode",
            StyleCode = "StyleCode",
            Quantity = "Quantity",
            Mrp = "Mrp",
            Discount = "Discount",
            BasicRate = "BasicRate",
            Tax = "Tax",
            Sgst = "Sgst",
            Cgst = "Cgst",
            LineTotal = "LineTotal",
            RoundOff = "RoundOff",
            BillAmnt = "BillAmnt",
            PaymentType = "PaymentType",
            Saleman = "Saleman",
            IsDataConsumed = "IsDataConsumed",
            ImportTime = "ImportTime"
        }
    }
}
