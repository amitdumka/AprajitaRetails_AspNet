namespace AprajitaRetails.Accounts {
    export interface PurchaseTaxTypesRow {
        PurchaseTaxTypeId?: number;
        TaxName?: string;
        TaxType?: number;
        CompositeRate?: number;
    }

    export namespace PurchaseTaxTypesRow {
        export const idProperty = 'PurchaseTaxTypeId';
        export const nameProperty = 'TaxName';
        export const localTextPrefix = 'Accounts.PurchaseTaxTypes';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            PurchaseTaxTypeId = "PurchaseTaxTypeId",
            TaxName = "TaxName",
            TaxType = "TaxType",
            CompositeRate = "CompositeRate"
        }
    }
}
