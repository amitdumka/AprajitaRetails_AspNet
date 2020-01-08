namespace AprajitaRetails.Voyager {
    export interface ImportSaleRegistersRow {
        ImportSaleRegisterId?: number;
        InvoiceNo?: string;
        InvoiceType?: string;
        InvoiceDate?: string;
        Quantity?: number;
        Mrp?: number;
        Discount?: number;
        BasicRate?: number;
        Tax?: number;
        RoundOff?: number;
        BillAmnt?: number;
        PaymentType?: string;
        IsConsumed?: boolean;
        ImportTime?: string;
    }

    export namespace ImportSaleRegistersRow {
        export const idProperty = 'ImportSaleRegisterId';
        export const nameProperty = 'InvoiceNo';
        export const localTextPrefix = 'Voyager.ImportSaleRegisters';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ImportSaleRegisterId = "ImportSaleRegisterId",
            InvoiceNo = "InvoiceNo",
            InvoiceType = "InvoiceType",
            InvoiceDate = "InvoiceDate",
            Quantity = "Quantity",
            Mrp = "Mrp",
            Discount = "Discount",
            BasicRate = "BasicRate",
            Tax = "Tax",
            RoundOff = "RoundOff",
            BillAmnt = "BillAmnt",
            PaymentType = "PaymentType",
            IsConsumed = "IsConsumed",
            ImportTime = "ImportTime"
        }
    }
}
