namespace AprajitaRetails.Voyager {
    export interface ImportInWardsRow {
        ImportInWardId?: number;
        InWardNo?: string;
        InWardDate?: string;
        InvoiceNo?: string;
        InvoiceDate?: string;
        PartyName?: string;
        TotalQty?: number;
        TotalMrpValue?: number;
        TotalCost?: number;
        ImportDate?: string;
    }

    export namespace ImportInWardsRow {
        export const idProperty = 'ImportInWardId';
        export const nameProperty = 'InWardNo';
        export const localTextPrefix = 'Voyager.ImportInWards';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ImportInWardId = "ImportInWardId",
            InWardNo = "InWardNo",
            InWardDate = "InWardDate",
            InvoiceNo = "InvoiceNo",
            InvoiceDate = "InvoiceDate",
            PartyName = "PartyName",
            TotalQty = "TotalQty",
            TotalMrpValue = "TotalMrpValue",
            TotalCost = "TotalCost",
            ImportDate = "ImportDate"
        }
    }
}
