namespace AprajitaRetails.Product {
    export interface SuppliersRow {
        SupplierId?: number;
        SuppilerName?: string;
        Warehouse?: string;
    }

    export namespace SuppliersRow {
        export const idProperty = 'SupplierId';
        export const nameProperty = 'SuppilerName';
        export const localTextPrefix = 'Product.Suppliers';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SupplierId = "SupplierId",
            SuppilerName = "SuppilerName",
            Warehouse = "Warehouse"
        }
    }
}
