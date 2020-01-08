namespace AprajitaRetails.Accounts {
    export interface SaleTaxTypesRow {
        SaleTaxTypeId?: number;
        TaxName?: string;
        TaxType?: number;
        CompositeRate?: number;
    }

    export namespace SaleTaxTypesRow {
        export const idProperty = 'SaleTaxTypeId';
        export const nameProperty = 'TaxName';
        export const localTextPrefix = 'Accounts.SaleTaxTypes';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SaleTaxTypeId = "SaleTaxTypeId",
            TaxName = "TaxName",
            TaxType = "TaxType",
            CompositeRate = "CompositeRate"
        }
    }
}
