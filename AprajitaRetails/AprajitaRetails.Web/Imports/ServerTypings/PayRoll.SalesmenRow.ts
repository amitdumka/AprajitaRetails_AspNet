namespace AprajitaRetails.PayRoll {
    export interface SalesmenRow {
        SalesmanId?: number;
        SalesmanName?: string;
    }

    export namespace SalesmenRow {
        export const idProperty = 'SalesmanId';
        export const nameProperty = 'SalesmanName';
        export const localTextPrefix = 'PayRoll.Salesmen';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SalesmanId = "SalesmanId",
            SalesmanName = "SalesmanName"
        }
    }
}
